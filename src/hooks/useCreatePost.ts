import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreatePostVariables {
  file: File;
  caption: string;
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ file, caption }: CreatePostVariables) => {
      // Pack parameters into a FormData object for file transmission
      const formData = new FormData();
      formData.append("image", file);
      formData.append("caption", caption);

      const response = await fetch("/api/posts", {
        method: "POST",
        body: formData, // Next.js infers multipart/form-data boundary headers automatically
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Failed to create post");

      return result;
    },
    onSuccess: () => {
      // Invalidates the feed cache key so your timeline fetches the fresh post automatically
      queryClient.invalidateQueries({ queryKey: ["posts-feed"] });
    },
  });
}
