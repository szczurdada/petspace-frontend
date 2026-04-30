"use client";

import styles from "./ProfileInterests.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { Textarea } from "@/app/uikit/Textarea/Textarea";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import api from "@/config/axios";

interface ProfileInterestsProps {
  username: string;
  interests?: {
    favoriteToys?: string;
    favoriteTreats?: string;
    favoriteActivities?: string;
    crimes?: string;
    guiltyHabits?: string;
    humans?: string;
  };
}

interface InterestsForm {
  toys: string;
  treats: string;
  activities: string;
  crimes: string;
  habits: string;
  humans: string;
}

export const ProfileInterests = ({
  username,
  interests,
}: ProfileInterestsProps) => {
  const t = useTranslations();

  const { register, handleSubmit, reset } = useForm<InterestsForm>({
    defaultValues: {
      toys: interests?.favoriteToys ?? "",
      treats: interests?.favoriteTreats ?? "",
      activities: interests?.favoriteActivities ?? "",
      crimes: interests?.crimes ?? "",
      habits: interests?.guiltyHabits ?? "",
      humans: interests?.humans ?? "",
    },
  });

  const onSubmit = async (data: InterestsForm) => {
    try {
      await api.put(`/user/${username}`, {
        interests: {
          favoriteToys: data.toys,
          favoriteTreats: data.treats,
          favoriteActivities: data.activities,
          crimes: data.crimes,
          guiltyHabits: data.habits,
          humans: data.humans,
        },
      });
      toast.success(t("toasts.saved"));
    } catch {
      toast.error(t("toasts.error"));
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>{t("profileInterests.title")}</h1>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label className={styles.label}>{t("profileInterests.toys")}</label>
          <Textarea
            appearance="primary"
            {...register("toys")}
            maxLength={300}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{t("profileInterests.treats")}</label>
          <Textarea
            appearance="primary"
            {...register("treats")}
            maxLength={300}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            {t("profileInterests.activities")}
          </label>
          <Textarea
            appearance="primary"
            {...register("activities")}
            maxLength={300}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{t("profileInterests.crimes")}</label>
          <Textarea
            appearance="primary"
            {...register("crimes")}
            maxLength={300}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{t("profileInterests.habits")}</label>
          <Textarea
            appearance="primary"
            {...register("habits")}
            maxLength={300}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{t("profileInterests.humans")}</label>
          <Textarea
            appearance="primary"
            {...register("humans")}
            maxLength={300}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <Button appearance="primary" type="submit">
          {t("common.save")}
        </Button>
        <Button appearance="secondary" type="button" onClick={() => reset()}>
          {t("common.cancel")}
        </Button>
      </div>
    </form>
  );
};
