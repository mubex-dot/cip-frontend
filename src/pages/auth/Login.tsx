import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema, type LoginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomTextField from "@/components/inputs/CustomTextField";
import { Spinner } from "@/components/ui/spinner";
import { useLoginMutation } from "@/app/authApiSlice";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const [loginRequest] = useLoginMutation();

  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState("");

  const userData = {
    id: 1,
    email: "john@doe.com",
    role: "user",
    phone: "08123456789",
    name: "John Doe",
    profile_icon: "image",
    joined_at: "10/10/10",
  };

  const simulateUserLogin = () => {
    dispatch(login({ user: userData, access_token: "asdhjhfdfhjfdfghj" }));
  };

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      const userData = await loginRequest(data).unwrap();
      dispatch(login(userData));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error", error);
      setErrorMsg(error?.data?.message);
    }
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-1/3 text-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="h-16 w-16 bg-primary rounded-md"></div>
            <h4 className="font-bold font-secondary">vCohort</h4>
            <p className="text-text-feint">
              AI-powered conversation insights for your programs
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 border border-border bg-white rounded-md mt-8"
          >
            <CustomTextField
              label="Email"
              placeholder="coach@example.com"
              type="email"
              register={register("email")}
              errorMessage={errors.email}
              className="mb-8"
            />

            <CustomTextField
              label="Password"
              placeholder="********"
              type="password"
              register={register("password")}
              errorMessage={errors.password}
              className="my-8"
            />

            <div className="flex justify-between items-center my-8">
              <div className="flex justify-center items-center gap-2">
                <Checkbox id="terms-checkbox" name="terms-checkbox" />
                <Label htmlFor="terms-checkbox">Remember Me</Label>
              </div>
              <a className="underline text-sm" href="#">
                Forgot password
              </a>
            </div>

            <Button
              onClick={simulateUserLogin}
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? <Spinner /> : "Sign In"}
            </Button>
            {errorMsg && (
              <p className="text-red-500 text-sm my-4 text-left">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
