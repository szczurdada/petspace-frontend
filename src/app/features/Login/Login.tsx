"use client";

import { useRouter } from "next/navigation";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import {
  emailValidationPattern,
  loginValidationMax,
  loginValidationMin,
  passwordValidationMax,
  passwordValidationMin,
  requiredValidation,
} from "@/app/uikit/constants/validations";
import { ROUTES } from "@/app/uikit/constants/routes";
import { useTranslations } from "next-intl";
import { ErrorMessage } from "@/app/uikit/ErrorMessage/ErrorMessage";
import { Link } from "@/app/uikit/Link/Link";
import { Input } from "@/app/uikit/Input/Input";
import { Button } from "@/app/uikit/Button/Button";

interface FormInputs {
  login: string;
  password: string;
}

export const Login = () => {
  const t = useTranslations();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const createAccountLink = () => router.push(ROUTES.signup);

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    router.push(ROUTES.profile);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.appName}>{t("login.title")}</h2>
      <div className={styles.inputsWrapper}>
        <Input
          {...register("login", {
            required: t(requiredValidation),
            minLength: loginValidationMin(t),
            maxLength: loginValidationMax(t),
            pattern: emailValidationPattern(t),
          })}
          type="text"
          appearance="primary"
          placeholder={t("login.email")}
          autoComplete="login"
        />

        {errors.login?.message && (
          <ErrorMessage message={errors.login?.message} />
        )}

        <Input
          {...register("password", {
            required: t(requiredValidation),
            minLength: passwordValidationMin(t),
            maxLength: passwordValidationMax(t),
          })}
          type="password"
          appearance="primary"
          placeholder={t("login.password")}
          autoComplete="current-password"
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}
      </div>
      <Button type="submit" appearance="primary">
        {t("login.submit")}
      </Button>
      <Link href={ROUTES.forgotPassword} appearance="primary">
        {t("login.forgotPassword")}
      </Link>
      <div className={styles.formDivider}></div>
      <Button appearance="secondary" onClick={createAccountLink}>
        {t("login.createAccount")}
      </Button>
    </form>
  );
};

export default Login;
