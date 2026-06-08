"use client";

import { useParams } from "next/navigation";
import useProfile from "@/hooks/useProfile";
import ProfileDetails from "@/components/ProfileDetails";

export default function ProfilePage() {
  const params = useParams();

  const username = params.username as string;

  const { profile, isLoading } = useProfile(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return <ProfileDetails profile={profile} />;
}
