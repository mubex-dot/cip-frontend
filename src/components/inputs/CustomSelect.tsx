import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FieldError } from "react-hook-form";

interface CustomSelectProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  options: Array<{ name: string; value: string }>;
  errorMessage?: FieldError | undefined;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CustomSelect = ({
  label,
  register,
  options,
  errorMessage,
  className,
  value,
  onChange,
}: CustomSelectProps) => {
  return (
    <div className={`${className}`}>
      <Select {...register} value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errorMessage?.message && (
        <p className="text-red-500 text-sm my-1">{errorMessage.message}</p>
      )}
    </div>
  );
};

export default CustomSelect;
