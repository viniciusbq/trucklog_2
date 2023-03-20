import React, { useState, useEffect, useCallback } from 'react';
import { Button, Dropdown } from 'react-bootstrap';

interface User {
  nome: string;
  email: string;
  senha: string;
}

interface LoginProps {
  userLogado: User | null;
}

const Login: React.FC<LoginProps> = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userLogadoData = localStorage.getItem('userLogado');
    if (userLogadoData) {
      setUser(JSON.parse(userLogadoData));
    }
  }, []);

  // Cria uma função que verifica se o usuário está logado e redireciona ele para a página correspondente

  const verificarLogin = useCallback(() => {
    if (user != null) {
      window.location.href = '../meus-posts/index.html';
    } else {
      window.location.href = '../login/index.html';
    }
  }, [user]);

  // Renderiza o botão de login ou o menu dropdown do usuário de acordo com o estado do usuário

  return (
    <div>
      {user != null ? (
        <Dropdown>
          <Dropdown.Toggle id="dropdown-user">{user.nome}</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={verificarLogin}>Meus posts</Dropdown.Item>

            <Dropdown.Item href="../index.html">Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button id="login-btn" onClick={verificarLogin}>
          Entrar
        </Button>
      )}
    </div>
  );
};

export default Login;
