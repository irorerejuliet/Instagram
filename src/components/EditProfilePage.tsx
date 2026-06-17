"use client";

import { useEffect, useState } from "react";
import useCurrentProfile from "@/hooks/useCurrentProfile";
import { useForm } from "react-hook-form";
import useUpdateProfile from "@/hooks/useUpdateProfile";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

type FormData = {
  full_name: string;
  username: string;
  bio: string;
  avatar_url: string;
};

export default function EditProfilePage() {
  const { data: profile, isLoading } = useCurrentProfile();
  const { mutate, isPending } = useUpdateProfile();

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    if (profile) {
      reset({
        full_name: profile.full_name || "",
        username: profile.username || "",
        bio: profile.bio || "",
        avatar_url: profile.avatar_url || "",
      });
    }
  }, [profile, reset]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const generateFileName = (file: File) => {
    return `${crypto.randomUUID()}-${file.name}`;
  };

  const uploadAvatar = async (file: File) => {
    const supabase = createClient();
    const fileName = generateFileName(file);

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(fileName, file);

    if (error) throw error;

    const { data: publicUrl } = supabase.storage
      .from("avatars")
      .getPublicUrl(data.path);

    // ✅ STEP 1A: Clean up double-encoded characters to prevent Next.js image server 500 errors
    return decodeURIComponent(publicUrl.publicUrl);
  };

  const onSubmit = async (data: FormData) => {
    let avatar_url = data.avatar_url;

    if (file) {
      avatar_url = await uploadAvatar(file);
    }

    mutate({
      ...data,
      avatar_url,
    });
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-zinc-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-zinc-800">
      <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
        <h1 className="mb-10 text-xl font-bold tracking-tight text-white sm:text-2xl">
          Edit Profile
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* ✅ STEP 1B: Safely anchor the avatar_url parameter right at the root level of the form */}
          <input type="hidden" {...register("avatar_url")} />

          {/* Top Identity Block / Avatar Section */}
          <div className="flex items-center justify-between rounded-2xl bg-zinc-900/50 p-4 border border-zinc-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="relative group h-16 w-16 overflow-hidden rounded-full bg-zinc-800 border border-zinc-700 ring-2 ring-zinc-900 ring-offset-2 ring-offset-black">
                {preview ? (
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                ) : profile?.avatar_url ? (
                  <Image
                    src={profile.avatar_url}
                    alt="Profile"
                    fill
                    unoptimized // ✅ STEP 1C: Direct CDN streaming
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-zinc-500 font-semibold text-lg">
                    {profile?.username?.charAt(0).toUpperCase() || "?"}
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white leading-tight">
                  {profile?.username || "username"}
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {profile?.full_name || "Full Name"}
                </p>
              </div>
            </div>

            <label className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-600 active:scale-[0.98]">
              Change photo
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          <hr className="border-zinc-900" />

          {/* Input Fields Stack */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Full Name
              </label>
              <input
                {...register("full_name")}
                placeholder="Full name"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Username
              </label>
              <input
                {...register("username")}
                placeholder="Username"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Bio
                </label>
                <span className="text-[10px] text-zinc-500">
                  Public profile bio
                </span>
              </div>
              <textarea
                {...register("bio")}
                rows={4}
                placeholder="Write something about yourself..."
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              disabled={isPending}
              className="w-full sm:w-auto min-w-[140px] rounded-xl bg-zinc-100 px-6 py-3 text-center text-sm font-bold text-black transition hover:bg-white disabled:opacity-50 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg"
            >
              {isPending ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-black" />
                  <span>Saving...</span>
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
