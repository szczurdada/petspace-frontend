"use client";

import { useRouter } from "next/navigation";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../ui/ErrorMessage/ErrorMessage";
import {
  loginValidationMax,
  loginValidationMin,
  passwordValidationMax,
  passwordValidationMin,
} from "@/app/shared/constants/validations";
import { ROUTES } from "@/app/shared/constants/routes";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import { Link } from "../../ui/Link/Link";

interface FormInputs {
  login: string;
  password: string;
}

export const Login = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const createAccountLink = () => router.push(ROUTES.signup);

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    router.push(ROUTES.about);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.appName}>PetSpace</p>
      <div className={styles.inputsWrapper}>
        <Input
          {...register("login", {
            required: "This field is required",
            minLength: loginValidationMin,
            maxLength: loginValidationMax,
          })}
          type="text"
          appearance="primary"
          placeholder="Email or Username"
          autoComplete="login"
        />

        {errors.login?.message && (
          <ErrorMessage message={errors.login?.message} />
        )}

        <Input
          {...register("password", {
            required: "This field is required",
            minLength: passwordValidationMin,
            maxLength: passwordValidationMax,
          })}
          type="password"
          appearance="primary"
          placeholder="Password"
          autoComplete="current-password"
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}
      </div>
      <Button type="submit" appearance="primary">
        Sign In
      </Button>
      <Link href={ROUTES.forgotPassword} appearance="primary">
        Forgot password?
      </Link>
      <div className={styles.formDivider}></div>
      <Button appearance="secondary" onClick={createAccountLink}>
        Create Account
      </Button>
    </form>
  );
};

export default Login;
