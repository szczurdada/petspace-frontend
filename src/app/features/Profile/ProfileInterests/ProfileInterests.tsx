"use client";

import styles from "./ProfileInterests.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { Textarea } from "@/app/uikit/Textarea/Textarea";
import axios from "axios";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface ProfileInterestsProps {
  username: string;
}

interface InterestsForm {
  toys: string;
  treats: string;
  activities: string;
  crimes: string;
  habits: string;
  humans: string;
}

export const ProfileInterests = ({ username }: ProfileInterestsProps) => {
  const t = useTranslations();

  const { register, handleSubmit } = useForm<InterestsForm>({
    defaultValues: {
      toys: "",
      treats: "",
      activities: "",
      crimes: "",
      habits: "",
      humans: "",
    },
  });

  const onSubmit = async (data: InterestsForm) => {
    // TODO rename toasts
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:3005/user/${username}`, data, {
        headers: { Authorization: token },
      });
      toast.success(t("profileEditor.toastSave"));
    } catch (e) {
      console.log(e);
      toast.error(t("profileEditor.toastError"));
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <h3 className={styles.title}>{t("profileInterests.title")}</h3>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label className={styles.label}>
                {t("profileInterests.toys")}
              </label>
              <Textarea appearance="primary" {...register("toys")} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>
                {t("profileInterests.treats")}
              </label>
              <Textarea appearance="primary" {...register("treats")} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>
                {t("profileInterests.activities")}
              </label>
              <Textarea appearance="primary" {...register("activities")} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>
                {t("profileInterests.crimes")}
              </label>
              <Textarea appearance="primary" {...register("crimes")} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>
                {t("profileInterests.habits")}
              </label>
              <Textarea appearance="primary" {...register("habits")} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>
                {t("profileInterests.humans")}
              </label>
              <Textarea appearance="primary" {...register("humans")} />
            </div>
          </div>
          <div className={styles.actions}>
            <Button type="submit" appearance="primary">
              {t("common.save")}
            </Button>
            <Button appearance="secondary">{t("common.cancel")}</Button>
          </div>
        </div>
      </form>
  );
};
