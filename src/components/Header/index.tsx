import styles from './styles.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <img src="/Logo.svg" alt="Logo" />
    </header>
  );
}
