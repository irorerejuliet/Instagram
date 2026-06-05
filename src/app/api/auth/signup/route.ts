import { createClient } from "@/lib/supabase/server";
import { SignupFormData } from "@/schemas/signupSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SignupFormData;

    const { username, email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Credentials",
        },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    // CREATE AUTH USER
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data.user) {
      return NextResponse.json(
        {
          success: false,
          message: error?.message || "Failed to create user",
        },
        {
          status: 400,
        },
      );
    }

    // INSERT USER PROFILE
    const { error: profileError } = await supabase.from("profiles").insert({
      id: data.user.id,
      username,
      email,
    });

    if (profileError) {
      return NextResponse.json(
        {
          success: false,
          message: profileError.message,
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
      data,
    });
  } catch (error: unknown) {
    console.error("SIGNUP ERROR:", error);
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 },
    );
  }
}
