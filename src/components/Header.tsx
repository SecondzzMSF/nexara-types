import styles from './Header.module.css';

import simbol from '../assets/simbol.svg';

export function Header() {
  return (
    <header className={styles.header}>
    <img src={simbol} alt="logotipo" />
    </header>
  );
}