import { createClient } from "@/lib/supabase/server";
import { LoginFormData } from "@/schemas/login";


import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as LoginFormData;

  try {
    if (!body.email || !body.password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword(body);

    if (error || !data?.user) {
      console.log(error);

      return NextResponse.json(
        {
          success: false,
          message: error?.message || "Invalid login credentials",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: error instanceof Error ? error.message : "Try again later",
      },
      { status: 500 },
    );
  }
}
