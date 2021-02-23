import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gdeggau.png" alt="Gabriel Deggau Schmidt" />
      <div>
        <strong>Gabriel Deggau Schmidt</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
