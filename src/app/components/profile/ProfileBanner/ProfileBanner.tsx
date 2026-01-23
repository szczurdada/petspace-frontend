import styles from "./ProfileBanner.module.scss";

export const ProfileBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarLogo}></div>
      <div className={styles.profileInfo}>
        <div className={styles.name}>Barney</div>
        <div className={styles.about}>
          <div className={styles.breed}>Dachshund</div>
          <div className={styles.age}>1 year</div>
          <div className={styles.city}>Warsaw</div>
        </div>
      </div>
      <div className={styles.profileDescription}>Description</div>
      <div className={styles.moreInfo}>
        <div className={styles.stat}>
          <span className={styles.statValue}>2</span>
          <span className={styles.statLabel}> friends</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>10</span>
          <span className={styles.statLabel}> photos</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>16</span>
          <span className={styles.statLabel}> groups</span>
        </div>
      </div>
    </div>
  );
};
