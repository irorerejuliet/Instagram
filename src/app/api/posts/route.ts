
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // 1. Initialize your predefined Supabase Server Client
    const supabase = await createClient();

    // 2. Check authentication using the official getUser() method
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
    }

    // 3. Parse the incoming multi-part form data
    const formData = await request.formData();
    const file = formData.get("image");
    const caption = formData.get("caption") || "";

    if (!file) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 },
      );
    }

    // 4. Convert file to buffer for Supabase Storage Upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filepath: user_id/timestamp.ext
    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}/${Date.now()}.${fileExt}`;

    // 5. Upload file buffer to 'INSTAGRAM-POSTS' bucket
    const { error: storageError } = await supabase.storage
      .from("instagram-posts")
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (storageError) throw storageError;

    // 6. Generate the public URL path
    const { data: urlData } = supabase.storage
      .from("instagram-posts")
      .getPublicUrl(fileName);

    const imageUrl = urlData.publicUrl;

    // 7. Insert the new row into your database posts table
    const { data: dbData, error: dbError } = await supabase
      .from("posts")
      .insert([
        {
          user_id: user.id,
          image_url: imageUrl,
          caption: caption,
        },
      ])
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, post: dbData }, { status: 201 });
  } catch (error) {
    console.error("Server Upload Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
