import { useState, useEffect } from "react";
import { supabase } from "../Lib/supabase";
import { useAuth } from "../context/AuthContext";
import { Heart, HeartOff } from "lucide-react"; // or any icons you prefer
import CommentSection from "./CommentSection";

const PostCard = ({ post }) => {
  const { user } = useAuth();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const checkIfLiked = async () => {
    const { data } = await supabase
      .from("likes")
      .select("*")
      .eq("post_id", post.id)
      .eq("user_id", user.id)
      .single();

    setLiked(!!data);
  };

  const fetchLikeCount = async () => {
    const { count } = await supabase
      .from("likes")
      .select("*", { count: "exact", head: true })
      .eq("post_id", post.id);

    setLikeCount(count);
  };

  const toggleLike = async () => {
    if (liked) {
      await supabase
        .from("likes")
        .delete()
        .eq("post_id", post.id)
        .eq("user_id", user.id);
    } else {
      await supabase.from("likes").insert([
        {
          post_id: post.id,
          user_id: user.id,
        },
      ]);
    }

    checkIfLiked();
    fetchLikeCount();
  };

  useEffect(() => {
    if (user) {
      checkIfLiked();
      fetchLikeCount();
    }
  }, [user]);

  return (
    <div className="bg-zinc-900 text-white p-4 rounded-lg mb-4">
      <div className="mb-2 text-sm text-gray-400">{post.caption}</div>

      {post.media_type === "image" ? (
        <img src={post.media_url} alt="Post" className="rounded-lg w-full" />
      ) : (
        <video controls className="rounded-lg w-full">
          <source src={post.media_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Like Button */}
      <div className="flex items-center gap-2 mt-3">
        <button onClick={toggleLike}>
          {liked ? (
            <Heart className="text-pink-600 fill-pink-600" />
          ) : (
            <HeartOff className="text-gray-400" />
          )}
        </button>
        <span className="text-sm text-gray-300">{likeCount} likes</span>
      </div>

      <div className="mt-2 text-xs text-gray-500">
        Posted by: {post.user_id}
      </div>
      {/* Comments go here */}
      <CommentSection postId={post.id} />
    </div>
  );
};

export default PostCard;
