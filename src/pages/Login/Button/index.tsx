import React, { useState } from 'react';
import styles from './index.module.css';
import Login from '../index';
const Botao: React.FC = (props) => {
  return (
    <>
      <button className={styles.btn_contd} onClick={props.event}>
        Ainda não possui uma conta?
      </button>
    </>
  );
};

export default Botao;
