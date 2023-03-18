import styles from "./Home.styles.module.css";

import logoImg from "../../assets/truck-log-logo.svg";

export const Home = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.header + " " + styles.content}>
          <img src={logoImg} alt="Caminhão verde da TruckLog" />
          <nav className={styles["header-nav"]}>
            <a href="#">Nossos Dados</a>
            <a href="#">Como funciona</a>
            <a href="#">Benefícios</a>
            <a href="#">FAQ</a>
          </nav>
          <button>Faça Login</button>
        </div>
      </header>
    </>
  );
};
