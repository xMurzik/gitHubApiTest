import ThemeSwitcher from 'Components/ThemeSwitcher/ThemeSwitcher';
import styles from './TheHeader.module.scss';

const TheHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>devfinder</div>
      <ThemeSwitcher />
    </div>
  );
};

export default TheHeader;
