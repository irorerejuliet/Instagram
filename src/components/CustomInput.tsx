import { FieldError, UseFormRegister } from "react-hook-form";

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
  return (
    <div className="flex flex-col">
      {label && <label className="text-sm text-gray-300 mb-1">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white text-sm outline-none focus:border-gray-500"
      />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
