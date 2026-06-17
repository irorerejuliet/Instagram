import { api } from "@/lib/supabase/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type UpdateProfileData = {
  full_name: string;
  username: string;
  bio: string;
  avatar_url: string;
};

export default function useUpdateProfile() {
  const queryClient = useQueryClient();
 const router = useRouter()
  return useMutation({
    mutationFn: async (data: UpdateProfileData) => {
      const response = await api.patch("/profile/me", data);
      return response.data.profile;
    },

   
   
    onSuccess: async (updatedProfile) => {
      queryClient.setQueryData(["current-profile"], updatedProfile);
      await queryClient.invalidateQueries({ queryKey: ["current-profile"] });

      setTimeout(() => {
        router.push(`/profile/${updatedProfile.username}`);
      }, 100);
    },
  });
}
