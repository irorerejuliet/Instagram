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

  // ✅ FIXED: no Date.now(), no React warning
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

    return publicUrl.publicUrl;
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
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">Edit Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Avatar Preview */}
        <div className="flex items-center gap-4">
          {preview ? (
            <Image
              src={preview}
              alt=""
              width={100}
              height={50}
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : profile?.avatar_url ? (
            <Image
              src={profile.avatar_url}
              alt=""
              width={100}
              height={100}
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : null}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-zinc-700 bg-black text-white rounded-lg p-3"
          />
        </div>

        <input
          {...register("full_name")}
          placeholder="Full name"
          className="w-full border border-zinc-700 bg-black text-white rounded-lg p-3"
        />

        <input
          {...register("username")}
          placeholder="Username"
          className="w-full border border-zinc-700 bg-black text-white rounded-lg p-3"
        />

        <textarea
          {...register("bio")}
          rows={4}
          placeholder="Bio"
          className="w-full border border-zinc-700 bg-black text-white rounded-lg p-3"
        />

        <button
          disabled={isPending}
          className="bg-blue-500 px-6 py-2 rounded-lg text-white disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Saved Changes"}
        </button>
      </form>
    </div>
  );
}
