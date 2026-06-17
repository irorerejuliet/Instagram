type UpdateProfileBody = {
  full_name?: string;
  username?: string;
  bio?: string;
  avatar_url?: string;
};

type ProfileUpdate = {
  full_name?: string;
  username?: string;
  bio?: string;
  avatar_url?: string;
  updated_at: string;
};

import { createClient } from "@/lib/supabase/server";

import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized Only" },
      { status: 401 },
    );
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    profile,
  });
}

//update profile
export async function PATCH(req: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized user",
      },
      { status: 401 },
    );
  }

  const body: UpdateProfileBody = await req.json();

  const updateData: ProfileUpdate = {
    updated_at: new Date().toISOString(),
  };

  if (body.full_name !== undefined) {
    updateData.full_name = body.full_name;
  }

  if (body.username !== undefined) {
    updateData.username = body.username;
  }

  if (body.bio !== undefined) {
    updateData.bio = body.bio;
  }

  if (body.avatar_url !== undefined) {
    updateData.avatar_url = body.avatar_url;
  }

  const { data, error } = await supabase
    .from("profiles")
    .update(updateData)
    .eq("id", user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    profile: data,
  });
}