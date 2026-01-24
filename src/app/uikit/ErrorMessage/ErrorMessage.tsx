import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <span className={styles.errorMessage} role="alert">
      {message}
    </span>
  );
};
