import React from 'react';
import { useState, useEffect } from 'react';
import styles from './index.module.css';
import Botao from './Button/index';
import Cadastrar from './Cadastrar';

interface User {
  email: string;
  senha: string;
}

let userValid: User = {
  email: '',
  senha: '',
};

const Logar: React.FC = () => {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(true);
  const handleMostrarCadastro = () => {
    setMostrarCadastro(true);
  };
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (email === '') {
      window.alert('Digite um E-mail!');
    } else if (password === '') {
      window.alert('Digite uma senha!');
    } else {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].senha === password) {
          console.log('login válido');
          userValid = {
            email: users[i].email,
            senha: users[i].senha,
          };
          //const token = jwt.sign({email: data[i].email}, SECRET, {expiresIn: 300});
          let token =
            Math.random().toString(16).substring(2) +
            Math.random().toString(16).substring(2);
          localStorage.setItem('token', token);
          localStorage.setItem('userLogado', JSON.stringify(userValid));
          window.location.href = '../index.html';
          break;
        } else {
          alert('Email ou senha inválidos');
        }
      }
    }
  };

  return (
    <>
      {mostrarCadastro ? (
        <Cadastrar />
      ) : (
        <div className={styles.container}>
          <div>
            <img
              src="https://raw.githubusercontent.com/viniciusbq/trucklog/main/login/assets/truck.png"
              alt="TruckLog"
              className={styles.img_truck}
            />
          </div>
          <div className={styles.login_form}>
            <h1 className={styles.title}>Login</h1>
            <h3 className={styles.subtitle}>Insira seus dados de acesso:</h3>

            <form onSubmit={handleSubmit}>
              <div className={styles.dados}>
                <input
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  data-testid="email"
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  name="password"
                  data-testid="password"
                />
              </div>
              <div className={styles.btn_par}>
                <p className={styles.paragrafo}>Esqueceu sua senha?</p>

                <input
                  type="submit"
                  className={styles.btn}
                  value={'Entrar'}
                  data-testid="submit-button"
                />
              </div>
            </form>
            <Botao event={handleMostrarCadastro} />
          </div>
        </div>
      )}
    </>
  );
};

export default Logar;
