"use client"
import CustomInput from "@/components/CustomInput";
import { SignupFormData, signupSchema } from "@/schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation,  useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

type ApiError = {
  message: string;
};


export default function SignupForm() {
  const router = useRouter();
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  });

  const {mutate, isPending} = useMutation({
    mutationFn: async (payload: SignupFormData) => {
      const { confirmPassword: _, ...cleanPayload } = payload;
      const res = await axios.post("/api/auth/signup", cleanPayload, {
        withCredentials: true
      });
      return res.data
    },

    onSuccess: async (data) => {
      toast.success(data?.message);

       reset();

      await queryClient.invalidateQueries({
        queryKey: ["user"],
      })

      router.push("/")
    },

    onError: (error: AxiosError<ApiError>) => {
      toast.error(error?.response?.data?.message ?? "Something went wrong")
    }
  })
  

 const onSubmit = (data: SignupFormData) => mutate(data);
    
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
              disabled={isPending}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
            >
              {isPending ? "Creating account" : "create account"}
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
