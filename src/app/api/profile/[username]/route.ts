import { createClient } from "@/lib/supabase/server";
import {  NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  console.log(user);
  if (userError && !user) {
    return NextResponse.json(
      { success: false, message: userError.message },
      { status: 404 },
    );
  }
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();

  if (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 404 },
    );
  }

  return NextResponse.json({
    success: true,
    profile: data,
  });
}

