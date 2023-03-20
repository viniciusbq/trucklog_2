import React from "react";
import styles from "./index.module.css";

interface IBotao {
  handleMostrarCadastro: () => void;
}

const Botao = ({ handleMostrarCadastro }: IBotao) => {
  return (
    <>
      <button className={styles.btn_contd} onClick={handleMostrarCadastro}>
        Ainda não possui uma conta?
      </button>
    </>
  );
};

export default Botao;
