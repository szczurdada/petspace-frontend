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

  const { register, handleSubmit } = useForm<InterestsForm>({
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
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:3005/user/${username}`,
        {
          interests: {
            favoriteToys: data.toys,
            favoriteTreats: data.treats,
            favoriteActivities: data.activities,
            crimes: data.crimes,
            guiltyHabits: data.habits,
            humans: data.humans,
          },
        },
        { headers: { Authorization: token } },
      );
      toast.success(t("toasts.saved"));
    } catch (e) {
      console.log(e);
      toast.error(t("toasts.error"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("profileInterests.title")}</h3>
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
            <label className={styles.label}>
              {t("profileInterests.treats")}
            </label>
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
            <label className={styles.label}>
              {t("profileInterests.crimes")}
            </label>
            <Textarea
              appearance="primary"
              {...register("crimes")}
              maxLength={300}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              {t("profileInterests.habits")}
            </label>
            <Textarea
              appearance="primary"
              {...register("habits")}
              maxLength={300}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              {t("profileInterests.humans")}
            </label>
            <Textarea
              appearance="primary"
              {...register("humans")}
              maxLength={300}
            />
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
