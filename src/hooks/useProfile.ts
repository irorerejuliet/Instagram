import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProfile = (username: string) => {
  const getProfile = useQuery({
    queryKey: ["profile", username],
    queryFn: async () => {
      const res = await axios.get(`/api/profile/${username}`, {
        withCredentials: true,
      });

      return res.data.profile;
    },
    enabled: !!username,
  });

  return {
    profile: getProfile.data,
    error: getProfile.error,
    status: getProfile.status,
    isLoading: getProfile.isLoading,
  };
};

export default useProfile;
