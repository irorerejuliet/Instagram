import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCurrentProfile = () => {
  return useQuery({
    queryKey: ["current-profile"],
    queryFn: async () => {
      const res = await axios.get("/api/profile/me", {
        withCredentials: true,
      });

      return res.data.profile;
    },
  });
};

export default useCurrentProfile;
