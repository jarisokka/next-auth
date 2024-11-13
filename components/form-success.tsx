import { IoCheckbox } from "react-icons/io5";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
      <IoCheckbox className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
