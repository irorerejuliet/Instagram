"use client";

import { useState, FormEvent } from "react";
import { useCreatePost } from "../hooks/useCreatePost"; // Adjust this import path based on your folders

export default function CreatePost() {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState<string>("");

  // Destructure our custom mutation hook actions and states
  const { mutate, isPending } = useCreatePost();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select an image first!");

    mutate(
      { file, caption },
      {
        onSuccess: () => {
          setFile(null);
          setCaption("");
          alert("Post shared successfully! 🚀");
        },
        onError: (err) => {
          alert(err.message);
        },
      },
    );
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
        Create New Post
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Selection Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Image
          </label>
          <input
            type="file"
            accept="image/*"
            disabled={isPending}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer disabled:opacity-50"
          />
        </div>

        {/* Caption Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Caption
          </label>
          <textarea
            rows={3}
            value={caption}
            disabled={isPending}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write an amazing caption..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-800 disabled:bg-gray-50"
          />
        </div>

        {/* Submission State Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold text-sm hover:bg-blue-600 transition disabled:bg-blue-300"
        >
          {isPending ? "Sharing to feed..." : "Share"}
        </button>
      </form>
    </div>
  );
}
