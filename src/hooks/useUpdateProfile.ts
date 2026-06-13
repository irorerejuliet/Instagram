import { api } from "@/lib/supabase/api";
import { useMutation, useQueryClient } from "@tanstack/react-query"

type UpdateProfileData = {
  full_name: string;
  username: string;
  bio: string;
  avatar_url: string,
};


export default function useUpdateProfile() {
    const queryClient = useQueryClient();


    return useMutation({
        mutationFn: async (data: UpdateProfileData) => {
            const response = await api.patch("/profile/me", data);

            return response.data.profile
        },

        onSuccess: (updatedProfile) => {
            queryClient.setQueryData(
                ["currentProfile"],
                updatedProfile
            )
        }
    })
}
