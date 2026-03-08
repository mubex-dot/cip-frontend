import { useState } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

interface CustomTextFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  errorMessage?:
    | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  className?: string;
  value?: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  disabled?: boolean;
}

const CustomTextField = ({
  label,
  type = "text",
  register,
  placeholder,
  errorMessage,
  className,
  value,
  onChange,
  disabled,
}: CustomTextFieldProps) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={className}>
      <Field>
        {label && <FieldLabel htmlFor={label}>{label}</FieldLabel>}

        {type === "textarea" ? (
          <Textarea
            id={label}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
            {...register}
          />
        ) : (
          <div className="relative">
            <Input
              id={label}
              type={inputType}
              placeholder={placeholder}
              value={value}
              disabled={disabled}
              onChange={onChange}
              className={isPassword ? "pr-10" : undefined}
              {...register}
            />

            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                tabIndex={-1}
              >
                {showPassword ? (
                  <IconEye size={18} />
                ) : (
                  <IconEyeOff size={18} />
                )}
              </button>
            )}
          </div>
        )}
      </Field>

      {errorMessage?.message && (
        <p className="text-red-500 text-sm my-1 text-left">
          {(errorMessage as FieldError).message}{" "}
        </p>
      )}
    </div>
  );
};

export default CustomTextField;
