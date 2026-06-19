"use client";

import { useParams } from "next/navigation";
import useProfile from "@/hooks/useProfile";
import ProfileDetails from "@/components/ProfileDetails";
import ProfileSkeleton from "@/features/profileSection/ProfileSkeleton";

export default function ProfilePage() {
  const params = useParams();

  const username = params.username as string;
console.log(username, "All users are available");
  const { profile, isLoading } = useProfile(username);

  if (isLoading) {
    return <ProfileSkeleton/>;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return <ProfileDetails profile={profile} />;
}
