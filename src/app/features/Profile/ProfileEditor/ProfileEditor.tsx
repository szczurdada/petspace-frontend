"use client";

import styles from "./ProfileEditor.module.scss";
import { StaticImageData } from "next/image";
import { Button } from "@/app/uikit/Button/Button";
import { useTranslations } from "use-intl";
import { useEffect, useState } from "react";
import { Combobox } from "@/app/uikit/Combobox/Combobox";
import { DatePicker } from "@/app/uikit/DatePicker/DatePicker";
import { AvatarEdit } from "@/app/uikit/AvatarEdit/AvatarEdit";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "@/app/uikit/Select/Select";
import { useForm, Controller, useWatch } from "react-hook-form";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { Textarea } from "@/app/uikit/Textarea/Textarea";

interface ProfileEditorProps {
  avatar?: string | StaticImageData;
  name: string;
  username: string;
  bio?: string;
  gender?: string;
  birthDate?: number;
  country?: string;
  city?: string;
  breed?: string;
}

interface ProfileForm {
  bio: string;
  gender: string;
  birthDate?: Dayjs;
  country: string;
  city: string;
  breed: string;
}

export const ProfileEditor = ({
  avatar,
  name,
  username,
  bio,
  gender,
  birthDate,
  country,
  city,
  breed,
}: ProfileEditorProps) => {
  const t = useTranslations();
  const [breeds, setBreeds] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const { handleSubmit, control, setValue  } = useForm<ProfileForm>({
    defaultValues: {
      bio: bio ?? "",
      gender: gender ?? "",
      birthDate: birthDate ? dayjs(birthDate) : undefined,
      country: country ?? "",
      city: city ?? "",
      breed: breed ?? "",
    },
  });

  const selectedCountry = useWatch({ control, name: "country" });

  const onSubmit = async (data: ProfileForm) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:3005/user/${username}`,
        {
          ...data,
          birthDate: data.birthDate?.valueOf(),
        },
        {
          headers: { Authorization: token },
        },
      );
      toast.success(t("toasts.saved"));
    } catch (e) {
      console.log(e);
      toast.error(t("toasts.error"));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3005/breeds")
      .then((res) => setBreeds(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3005/countries")
      .then((res) => setCountries(res.data));
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;
    axios
      .get(`http://localhost:3005/countries/cities?country=${selectedCountry}`)
      .then((res) => setCities(res.data));
  }, [selectedCountry]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("profileEditor.title")}</h3>
        <div className={styles.profileContent}>
          <div className={styles.avatarSection}>
            <AvatarEdit src={avatar} size={100} />
          </div>
          <div className={styles.userInfo}>
            <h4 className={styles.name}>{name}</h4>
            <div className={styles.username}>Username: /en/{username}</div>
          </div>
        </div>
        <div className={styles.fields}>
          <div className={styles.field}>
            <label className={styles.label}>{t("profileEditor.bio")}</label>
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <Textarea appearance="primary" {...field} maxLength={150} />
              )}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              {t("profileEditor.birthday")}
            </label>
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <DatePicker value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>{t("profileEditor.gender")}</label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { value: "male", label: t("gender.male") },
                    { value: "female", label: t("gender.female") },
                  ]}
                  placeholder={t("placeholder.noneSelected")}
                />
              )}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>{t("profileEditor.country")}</label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Combobox
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    setValue("city", "")
                  }}
                  options={countries}
                  placeholder={t("placeholder.noneSelected")}
                />
              )}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>{t("profileEditor.city")}</label>
            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <Combobox
                  value={field.value}
                  onChange={field.onChange}
                  disabled={!selectedCountry}
                  options={cities}
                  placeholder={t("placeholder.noneSelected")}
                />
              )}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>{t("profileEditor.breed")}</label>
            <Controller
              control={control}
              name="breed"
              render={({ field }) => (
                <Combobox
                  value={field.value}
                  onChange={field.onChange}
                  options={breeds}
                  placeholder={t("placeholder.noneSelected")}
                />
              )}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button appearance="primary" type="submit">
            {t("common.save")}
          </Button>
          <Button appearance="secondary" type="button">
            {t("common.cancel")}
          </Button>
        </div>
      </div>
    </form>
  );
};
