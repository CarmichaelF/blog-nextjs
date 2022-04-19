import styles from './styles.module.scss';
import common from '../../styles/common.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={`${styles.container} ${common.container}`}>
      <img src="/Logo.svg" alt="Logo" />
    </header>
  );
}
