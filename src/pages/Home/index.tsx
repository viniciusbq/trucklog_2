import styles from "./Home.styles.module.css";

import logoImg from "../../assets/truck-log-logo.svg";
import notebookManImg from "../../assets/notebook-man.svg";
import backgroundObjectImg from "../../assets/bg-item1.svg";
import backgroundWorld from "../../assets/bg-world.svg";

import taskgoLogoImg from "../../assets/taskgo-logo.png";
import dbcLogoImg from "../../assets/dbc-logo.svg";
import singularLogoImg from "../../assets/singular-logo.png";
import houseLogoImg from "../../assets/house-logo.svg";
import fibrasulLogoImg from "../../assets/fibrasul-logo.svg";

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
          <img
            src={backgroundWorld}
            className={styles.backgroundObject}
            alt=""
            aria-hidden
          />
        </div>
      </section>

      <section className={styles.partners + " " + styles.container}>
        <div className={styles.partners}>
          <div className={styles["text-section"]}>
            <h1 className={styles.title}>Parceiros</h1>
            <h2 className={styles.subtitle}>Eles também contam conosco</h2>
          </div>
          <div className={styles["partners-cards"]}>
            <div className={styles["partners-card"]}>
              <img src={taskgoLogoImg} alt="" />
            </div>
            <div className={styles["partners-card"]}>
              <img src={dbcLogoImg} alt="" />
            </div>
            <div className={styles["partners-card"]}>
              <img src={singularLogoImg} alt="" />
            </div>
            <div className={styles["partners-card"]}>
              <img src={houseLogoImg} alt="" />
            </div>
            <div className={styles["partners-card"]}>
              <img src={fibrasulLogoImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
