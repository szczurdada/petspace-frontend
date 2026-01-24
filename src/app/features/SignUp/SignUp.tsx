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

interface FormInputs {
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

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    router.push(ROUTES.profile);
  };

  const returnToLogin = () => {
    router.push(ROUTES.login);
  };

  return (
    <form className={styles.signUp} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.signUpTitle}>{t("signUp.title")}</h1>
      <p className={styles.signUpDescription}>{t("signUp.description")}</p>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="username">{t("signUp.username")}</label>
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
      </div>
      <div className={styles.buttons}>
        <Button type="submit" appearance="primary">
          {t("signUp.createAccount")}
        </Button>
        <Button type="button" appearance="secondary" onClick={returnToLogin}>
          {t("signUp.haveAccount")}
        </Button>
      </div>
    </form>
  );
};
