// import { createClient } from "@/lib/supabase/server";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//   try {
//     const supabase = await createClient();

//     const {
//       data: { user },
//       error: authError,
//     } = await supabase.auth.getUser();

//     if (authError || !user) {
//       return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
//     }

//     const formData = await request.formData();
//     const file = formData.get("image") as File | null;
//     const caption = (formData.get("caption") as string) || "";

//     if (!file) {
//       return NextResponse.json(
//         { error: "No image file provided" },
//         { status: 400 },
//       );
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     const fileExt = file.name.split(".").pop();
//     const fileName = `${user.id}/${Date.now()}.${fileExt}`;

//     const { error: storageError } = await supabase.storage
//       .from("instagram-posts")
//       .upload(fileName, buffer, {
//         contentType: file.type,
//         upsert: false,
//       });

//     if (storageError) throw storageError;

//     const { data: urlData } = supabase.storage
//       .from("instagram-posts")
//       .getPublicUrl(fileName);

//     const imageUrl = urlData.publicUrl;

//     const { data: dbData, error: dbError } = await supabase
//       .from("posts")
//       .insert([
//         {
//           user_id: user.id,
//           image_url: imageUrl,
//           caption: caption,
//         },
//       ])
//       .select()
//       .single();

//     if (dbError) throw dbError;

//     return NextResponse.json({ success: true, post: dbData }, { status: 201 });
//   } catch (error: any) {
//     console.error("Server Upload Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
