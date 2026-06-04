"use client"
import CustomInput from "@/components/CustomInput";
import { LoginFormData, loginSchema } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
   const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const { email, password } = data;

    const { data: user, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      console.log(error.message);
      return;
    }

    console.log("Login Successful");
    router.push("/");
  };
       
        
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="border border-gray-800 bg-black p-8">
          <h1 className="text-white text-5xl font-bold text-center mb-10">
            Instagram
          </h1>

          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              register={register}
              error={errors.email}
            />

            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              register={register}
              error={errors.password}
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <button
            type="button"
            className="w-full text-blue-500 font-semibold text-sm"
          >
            Log in with Facebook
          </button>

          <p className="text-center mt-6">
            <span className="text-gray-400 text-sm cursor-pointer">
              Forgot password?
            </span>
          </p>
        </div>

        <div className="border border-gray-800 mt-3 p-5 text-center">
          <p className="text-white text-sm">
            Don&apos;t have an account?
            <Link href="/sign-up" className="text-blue-500 font-semibold cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
