import { createClient } from "@/lib/supabase/server";

import {  NextResponse } from "next/server";


export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
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
export async function PATCH(req: Request){
  const supabase = await createClient()


  const { data: {user},  } = await supabase.auth.getUser()
console.log(user)
  if(!user){
    return NextResponse.json({
      success: false,
      messgae: "Unauthorized"
    }, 
    {status: 401}
  )
  }
  
  const body = await req.json();

  const {full_name, username, bio, avatar_url} = body;

  const { data, error } = await supabase
    .from("profiles")
    .update({
      full_name,
      username,
      bio,
      avatar_url,
      updated_at: new Date().toISOString(),
    })
    .eq("id", user.id)
    .select()
    .single();

    if(error){
      return NextResponse.json({
        success: false,
        message: error?.message
      },
    {status: 400}
  )
    }

    return NextResponse.json({
      success: true,
      profile: data
    })

}