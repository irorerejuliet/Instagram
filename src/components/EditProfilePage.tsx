"use client";

import useCurrentProfile from "@/hooks/useCurrentProfile";

export default function EditProfilePage() {
  const { data: profile, isLoading } = useCurrentProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">Edit Profile</h1>

      <form className="space-y-5">
        <div>
          <label className="text-white block mb-2">Full Name</label>

          <input
            defaultValue={profile?.full_name ?? ""}
            className="w-full border border-zinc-700 bg-black text-white rounded-lg p-3"
          />
        </div>

        <div>
          <label className="text-white block mb-2">Username</label>

          <input
            defaultValue={profile?.username ?? ""}
            className="w-full border border-zinc-700 bg-black text-white rounded-lg p-3"
          />
        </div>

        <div>
          <label className="text-white block mb-2">Bio</label>

          <textarea
            rows={4}
            defaultValue={profile?.bio ?? ""}
            className="w-full border border-zinc-700 bg-black text-white rounded-lg p-3"
          />
        </div>

        <button className="bg-blue-500 px-6 py-2 rounded-lg text-white">
          Save
        </button>
      </form>
    </div>
  );
}
