import styles from "./Home.styles.module.css";

import logoImg from "../../assets/truck-log-logo.svg";
import backgroundObjectImg from "../../assets/bg-item1.svg";
import notebookManImg from "../../assets/notebook-man.svg";

export const Home = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.header + " " + styles.content}>
          <img src={logoImg} alt="Caminhão verde da TruckLog" />
          <img
            className={styles.backgroundObject}
            src={backgroundObjectImg}
            alt=""
            aria-hidden
          />
          <nav className={styles["header-nav"]}>
            <a href="#">Nossos Dados</a>
            <a href="#">Como funciona</a>
            <a href="#">Benefícios</a>
            <a href="#">FAQ</a>
          </nav>
          <button>Faça Login</button>
        </div>
      </header>

      <section className={styles.container}>
        <div className={styles.intro + " " + styles.content}>
          <div className={styles["text-section"]}>
            <h1>O MAIOR E MAIS RENTÁVEL APP DE GESTÃO DE FROTAS</h1>
            <p>
              O TruckLog é um app perfeito para você empresário que busca
              controlar as suas frotas, além de trazer inúmeros benefícios ao
              adquirir nossos serviços.
            </p>
            <button>Saiba mais</button>
          </div>
          <img src={notebookManImg} alt="Homem usando Notebook" />
        </div>
      </section>
    </>
  );
};
