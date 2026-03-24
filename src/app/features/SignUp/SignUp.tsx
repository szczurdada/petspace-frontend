"use client";

import { ROUTES } from "@/app/uikit/constants/routes";
import { useRouter } from "next/navigation";
import styles from "./SignUp.module.scss";
import { useForm } from "react-hook-form";
import {
  emailValidationMax,
  emailValidationPattern,
  passwordValidationMax,
  passwordValidationMin,
  passwordValidationPattern,
  requiredValidation,
  usernameValidationMax,
  usernameValidationMin,
  usernameValidationPattern,
} from "@/app/uikit/constants/validations";
import { useTranslations } from "next-intl";
import { Input } from "@/app/uikit/Input/Input";
import { ErrorMessage } from "@/app/uikit/ErrorMessage/ErrorMessage";
import { Button } from "@/app/uikit/Button/Button";
import axios from "axios";
import { toast } from "react-toastify";

interface FormInputs {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const t = useTranslations();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    try {
      const response = await axios.post("http://localhost:3005/signup", data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      router.push(ROUTES.registrationSteps);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const type = e.response?.data?.type;
        if (type === "EMAIL_ALREADY_EXISTS") {
          toast.error(t("errors.EMAIL_ALREADY_EXISTS"));
        } else if (type === "USERNAME_ALREADY_EXISTS") {
          toast.error(t("errors.USERNAME_ALREADY_EXISTS"));
        }
      }
    }
  };

  const returnToSignIn = () => {
    router.push(ROUTES.signin);
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className={styles.title}>{t("signUp.title")}</h1>
        <p className={styles.subtitle}>{t("signUp.subtitle")}</p>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <div className={styles.fieldWrapper}>
            <label htmlFor="name">{t("signUp.name")}</label>
            <small className={styles.hint}>{t("signUp.displayNameHint")}</small>
          </div>

          <Input
            {...register("name", {
              required: t(requiredValidation),
              minLength: usernameValidationMin(t),
              maxLength: usernameValidationMax(t),
              pattern: usernameValidationPattern(t),
            })}
            id="name"
            type="text"
            appearance="primary"
          />

          {errors.name?.message && (
            <ErrorMessage message={errors.name?.message} />
          )}
        </div>

        <div className={styles.field}>
          <div className={styles.fieldWrapper}>
            <label htmlFor="username">{t("signUp.username")}</label>
            <small className={styles.hint}>
              {t("signUp.displayUsernameHint")}
            </small>
          </div>

          <Input
            {...register("username", {
              required: t(requiredValidation),
              minLength: usernameValidationMin(t),
              maxLength: usernameValidationMax(t),
              pattern: usernameValidationPattern(t),
            })}
            id="username"
            type="text"
            appearance="primary"
          />

          {errors.username?.message && (
            <ErrorMessage message={errors.username?.message} />
          )}
        </div>

        <div className={styles.field}>
          {/* TODO move to separate component */}
          <label htmlFor="email">{t("signUp.email")}</label>
          <Input
            {...register("email", {
              required: t(requiredValidation),
              maxLength: emailValidationMax(t),
              pattern: emailValidationPattern(t),
            })}
            id="email"
            type="email"
            appearance="primary"
          />

          {errors.email?.message && (
            <ErrorMessage message={errors.email?.message} />
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="password">{t("signUp.password")}</label>
          <Input
            {...register("password", {
              required: t(requiredValidation),
              minLength: passwordValidationMin(t),
              maxLength: passwordValidationMax(t),
              pattern: passwordValidationPattern(t),
            })}
            id="password"
            type="password"
            appearance="primary"
          />
          {errors.password?.message && (
            <ErrorMessage message={errors.password?.message} />
          )}
        </div>
        <div className={styles.buttons}>
          <Button type="submit" appearance="primary">
            {t("signUp.createAccount")}
          </Button>
          <Button type="button" appearance="secondary" onClick={returnToSignIn}>
            {t("signUp.haveAccount")}
          </Button>
        </div>
      </div>
    </form>
  );
};
