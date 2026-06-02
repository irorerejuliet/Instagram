"use client"
import CustomInput from "@/components/CustomInput";
import { createClient } from "@/lib/supabase/client";
import { SignupFormData, signupSchema } from "@/schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const supabase = createClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  

 const onSubmit = async (data: SignupFormData) => {
   const { email, password, username } = data;

   const { data: authData, error } = await supabase.auth.signUp({
     email,
     password,
   });

   if (error) {
     console.log(error.message);
     return;
   }

   if (!authData.user) {
     console.log("User is null (maybe email confirmation is enabled)");
     return;
   }

   await supabase.from("profiles").insert({
     id: authData.user.id,
     username,
     email,
   });

   console.log("Signup successful");

   // 2. redirect user
   router.push("/login");
 };;
    
  return (
    <div className="min-h-screen bg-black te flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="border border-gray-800 bg-black p-8">
          <h1 className="text-white text-5xl font-bold text-center mb-8">
            Instagram
          </h1>

          <p className="text-gray-400 text-center text-sm font-semibold mb-6">
            Sign up to see photos and videos from your friends.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <CustomInput
              label="Username"
              name="username"
              placeholder="Username"
              register={register}
              error={errors.username}
            />

            <CustomInput
              label="Email"
              name="email"
              placeholder="Enter valid email"
              type="email"
              register={register}
              error={errors.email}
            />

            <CustomInput
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              register={register}
              error={errors.password}
            />

            <CustomInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              register={register}
              error={errors.confirmPassword}
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            By signing up, you agree to our Terms, Privacy Policy and Cookies
            Policy.
          </p>
        </div>

        <div className="border border-gray-800 mt-3 p-5 text-center">
          <p className="text-white text-sm">
            Have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 font-semibold cursor-pointer"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
