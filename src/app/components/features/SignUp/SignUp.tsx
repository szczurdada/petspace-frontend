import { ROUTES } from "@/app/shared/constants/routes";
import { Button } from "../../ui/Button/Button";
import { useRouter } from "next/navigation";
import styles from "./SignUp.module.scss";
import { Input } from "../../ui/Input/Input";
import { useForm } from "react-hook-form";
import {
  emailValidationMax,
  emailValidationPattern,
  passwordValidationMax,
  passwordValidationMin,
  passwordValidationPattern,
  usernameValidationMax,
  usernameValidationMin,
  usernameValidationPattern,
} from "@/app/shared/constants/validations";
import { ErrorMessage } from "../../ui/ErrorMessage/ErrorMessage";

interface FormInputs {
  username: string;
  email: string;
  password: string;
}

export const SignUp = () => {
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
      <h1 className={styles.signUpTitle}>Sign Up</h1>
      <p className={styles.signUpDescription}>
        Please fill out the form below to create an account.
      </p>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <Input
            {...register("username", {
              required: "Username is required",
              minLength: usernameValidationMin,
              maxLength: usernameValidationMax,
              pattern: usernameValidationPattern,
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
          <label htmlFor="email">Email</label>
          <Input
            {...register("email", {
              required: "Email is required",
              maxLength: emailValidationMax,
              pattern: emailValidationPattern,
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
          <label htmlFor="password">Password</label>
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: passwordValidationMin,
              maxLength: passwordValidationMax,
              pattern: passwordValidationPattern,
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
          Create Account
        </Button>
        <Button type="button" appearance="secondary" onClick={returnToLogin}>
          I already have an account
        </Button>
      </div>
    </form>
  );
};
