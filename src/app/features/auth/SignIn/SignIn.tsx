"use client";

import { useRouter } from "next/navigation";
import styles from "./SignIn.module.scss";
import { useForm } from "react-hook-form";
import {
  emailValidationPattern,
  signInValidationMax,
  signInValidationMin,
  passwordValidationMax,
  passwordValidationMin,
  requiredValidation,
} from "@/constants/validations";
import { ROUTES } from "@/routes/routes";
import { useTranslations } from "next-intl";
import { ErrorMessage } from "@/app/uikit/form/ErrorMessage/ErrorMessage";
import { Link } from "@/app/uikit/navigation/Link/Link";
import { Input } from "@/app/uikit/form/Input/Input";
import { Button } from "@/app/uikit/form/Button/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "@/config/env";

interface FormInputs {
  email: string;
  password: string;
}

export const SignIn = () => {
  const t = useTranslations();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const createAccountLink = () => router.push(ROUTES.signup);

  const onSubmit = async (data: FormInputs) => {
    try {
      const response = await axios.post(`${API_URL}/signin`, data);
      localStorage.setItem("token", response.data.token);
      const username = response.data.user.username;
      if (!username) {
        toast.error(t("toast.error"));
        return;
      }
      router.push(ROUTES.profile(username));
    } catch {
      toast.error(t("errors.INVALID_CREDENTIALS"));
    }
  };

  return (
    <form className={styles.signInForm} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className={styles.title}>{t("signin.title")}</h1>
        <p className={styles.subtitle}>{t("signin.subtitle")}</p>
      </div>
      <div className={styles.inputsWrapper}>
        <Input
          {...register("email", {
            required: t(requiredValidation),
            minLength: signInValidationMin(t),
            maxLength: signInValidationMax(t),
            pattern: emailValidationPattern(t),
          })}
          type="text"
          appearance="primary"
          placeholder={t("signin.email")}
          autoComplete="signin"
        />

        {errors.email?.message && (
          <ErrorMessage message={errors.email?.message} />
        )}

        <Input
          {...register("password", {
            required: t(requiredValidation),
            minLength: passwordValidationMin(t),
            maxLength: passwordValidationMax(t),
          })}
          type="password"
          appearance="primary"
          placeholder={t("signin.password")}
          autoComplete="current-password"
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}
      </div>
      <Button type="submit" appearance="primary">
        {t("signin.submit")}
      </Button>
      <Link
        href={ROUTES.forgotPassword}
        appearance="primary"
        className={styles.forgotPassword}
      >
        {t("signin.forgotPassword")}
      </Link>
      <div className={styles.formDivider}>
        <span>{t("common.or")}</span>
      </div>
      <Button type="button" appearance="secondary" onClick={createAccountLink}>
        {t("signin.createAccount")}
      </Button>
    </form>
  );
};

export default SignIn;
