import { FieldError, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type CustomInputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
};
export default function CustomInput({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 pr-10 text-white text-sm outline-none focus:border-gray-500"
      />

      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2  bg-red-800text-gray-400"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}
