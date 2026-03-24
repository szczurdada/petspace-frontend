import { Button } from "@/app/uikit/Button/Button";
import styles from "./RegestrationSteps.module.scss";
import { ROUTES } from "@/app/uikit/constants/routes";
import { useRouter } from "next/navigation";
import { Combobox } from "@/app/uikit/Combobox/Combobox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations } from "use-intl";
import { Select } from "@/app/uikit/Select/Select";
import { DatePicker } from "@/app/uikit/DatePicker/DatePicker";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { toast } from "react-toastify";

interface RegistrationStepsProps {
  username: string;
  birthDate?: number;
  gender?: string;
  country?: string;
  city?: string;
  breed?: string;
}

const RegistrationSteps = ({
  username,
  birthDate,
  gender,
  country,
  city,
  breed,
}: RegistrationStepsProps) => {
  const t = useTranslations();
  const router = useRouter();

  const [genderValue, setGenderValue] = useState(gender ?? "");
  const [selectedAge, setSelectedAge] = useState<Dayjs | undefined>(
    birthDate ? dayjs(birthDate) : undefined,
  );
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(breed ?? "");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(city ?? "");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(country ?? "");

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

  const skipRegistration = () => {
    router.push(ROUTES.registrationStepsAvatar);
  };

  const saveChanges = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:3005/user/${username}`,
        {
          gender: genderValue,
          birthDate: selectedAge?.valueOf(),
          country: selectedCountry,
          city: selectedCity,
          breed: selectedBreed,
        },
        {
          headers: { Authorization: token },
        },
      );
      router.push(ROUTES.registrationStepsAvatar);
    } catch {
      toast.error(t("toast.error"));
    }
  };

  return (
    <form className={styles.form}>
      <div>
        <div className={styles.tag}>{t("registrationSteps.step")}</div>
      </div>
      <div className={styles.fields}>
        <div>
          <h2 className={styles.title}>{t("registrationSteps.title")}</h2>
          <p className={styles.subtitle}>{t("registrationSteps.subtitle")}</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            {t("registrationSteps.gender")}
          </label>
          {/* TODO */}
          <Select
            value={genderValue}
            onChange={setGenderValue}
            options={[
              { value: "male", label: t("gender.male") },
              { value: "female", label: t("gender.female") },
            ]}
            placeholder={t("placeholder.noneSelected")}
          ></Select>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            {t("registrationSteps.birthday")}
          </label>
          <DatePicker
            value={selectedAge}
            onChange={setSelectedAge}
          ></DatePicker>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            {t("registrationSteps.country")}
          </label>
          <Combobox
            value={selectedCountry}
            onChange={setSelectedCountry}
            options={countries}
            placeholder={t("placeholder.noneSelected")}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{t("registrationSteps.city")}</label>
          <Combobox
            value={selectedCity}
            onChange={setSelectedCity}
            options={cities}
            placeholder={t("placeholder.noneSelected")}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{t("registrationSteps.breed")}</label>
          <Combobox
            value={selectedBreed}
            onChange={setSelectedBreed}
            options={breeds}
            placeholder={t("placeholder.noneSelected")}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <Button appearance="primary" type="button" onClick={saveChanges}>
          {t("common.continue")}
        </Button>
        <Button appearance="secondary" type="button" onClick={skipRegistration}>
          {t("common.skip")}
        </Button>
      </div>
    </form>
  );
};

export default RegistrationSteps;
