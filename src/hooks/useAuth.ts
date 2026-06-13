import { createClient } from "@/lib/supabase/client";
import { LoginFormData } from "@/schemas/loginSchema";
import { SignupFormData } from "@/schemas/signupSchema";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const supabase = createClient();

// 1. Login Mutation Hook
export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginFormData) => {
      const { email, password } = data;
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error; // Caught by TanStack Query's onError
      return authData;
    },
    onSuccess: () => {
      console.log("Login Successful");
      router.push("/");
      router.refresh();
    },
  });
}

// 2. Signup Mutation Hook
export function useSignupMutation() {
  return useMutation({
    mutationFn: async (data: SignupFormData) => {
      const { email, password, username } = data;
      const { data: authData, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username }, // Reads into the SQL database trigger seamlessly
        },
      });

      if (error) throw error;
      return authData;
    },
  });
}
