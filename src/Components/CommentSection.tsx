import { useState, useEffect } from "react";
import { supabase } from "../Lib/supabase";
import { useAuth } from "../context/AuthContext";

const CommentSection = ({ postId }) => {
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*, profiles(username)")
      .eq("post_id", postId)
      .order("created_at", { ascending: false });

    if (!error) {
      setComments(data);
    }
  };

  const handleCommentSubmit = async () => {
    if (!comment.trim()) return;

    const { error } = await supabase.from("comments").insert([
      {
        post_id: postId,
        user_id: user.id,
        content: comment,
      },
    ]);

    if (!error) {
      setComment("");
      fetchComments();
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-3 py-1 bg-zinc-800 text-white rounded"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={handleCommentSubmit}
          className="text-sm bg-pink-600 px-3 py-1 rounded text-white"
        >
          Post
        </button>
      </div>

      <div className="mt-3 text-sm text-zinc-300">
        {comments.map((c) => (
          <div key={c.id} className="border-b border-zinc-700 py-2">
            <span className="font-semibold text-pink-400">
              {c.profiles?.username || "User"}:
            </span>{" "}
            {c.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
