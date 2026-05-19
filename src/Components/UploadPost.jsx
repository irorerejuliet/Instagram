import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../Lib/supabase";

const UploadPost = () => {
  const { user } = useAuth();
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file || !user) {
      setMessage("File or user missing.");
      return;
    }

    setUploading(true);
    setMessage("Uploading...");

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, file);

      if (uploadError) {
        console.error("Upload Error:", uploadError.message);
        setMessage("Upload failed: " + uploadError.message);
        setUploading(false);
        return;
      }

      // Get public URL
      const { data } = supabase.storage.from("media").getPublicUrl(filePath);
      const media_url = data?.publicUrl;

      if (!media_url) {
        setMessage("Could not get media URL.");
        setUploading(false);
        return;
      }

      // Determine media type
      const media_type = file.type.startsWith("image") ? "image" : "video";

      // Insert post to Supabase
      const { error: dbError } = await supabase.from("posts").insert([
        {
          user_id: user.id,
          caption: caption || "No caption",
          media_url,
          media_type,
        },
      ]);

      if (dbError) {
        console.error("DB Insert Error:", dbError.message);
        setMessage("DB error: " + dbError.message);
      } else {
        console.log("Upload complete.");
        setMessage("Upload successful! ✅");
        setCaption("");
        setFile(null);
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      setMessage("Unexpected error occurred.");
    }

    setUploading(false);
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-xl">
      {message && <div className="mb-2 text-sm text-yellow-300">{message}</div>}
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2"
      />
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full mb-2 p-2 rounded bg-zinc-700"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
      >
        {uploading ? "Uploading..." : "Post"}
      </button>
    </div>
  );
};

export default UploadPost;
