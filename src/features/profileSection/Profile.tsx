import ProfileDetails from "@/components/ProfileDetails";
import MobileProfile from "../mobile/MobileProfile";


type ProfileProps = {
  id: string;
  username: string;
  full_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  email: string;
};


const Profile = ({profile}: {profile: ProfileProps}) => {
  return (
    <div className="w-full min-h-screen lg:py-10 md:py-6 sm:py-4 lg:px-14 md:12 smpx-7 px-3">
      {/* profile for big screem */}
      <ProfileDetails profile={profile} />
      {/* profile for larfe screen */}
      <MobileProfile />
    </div>
  );
};

export default Profile;
