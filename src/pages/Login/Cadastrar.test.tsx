import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cadastrar from './Cadastrar';

test('submits user registration form', async () => {
  // Cria um mock da função global fetch
  const mockFetch = jest.spyOn(global, 'fetch').mockImplementation(
    () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Cadastrado!' }),
      } as Response) // Adiciona um cast para Response
  );
  // Renderiza o componente Cadastrar
  render(<Cadastrar />);

  // Preenche os campos do formulário
  userEvent.type(screen.getByTestId(/Nome/i), 'John Doe');
  userEvent.type(screen.getByTestId(/E-mail/i), 'john@example.com');
  userEvent.type(screen.getByTestId(/Senha/i), 'Password123');

  // Clica no botão de cadastrar
  userEvent.click(screen.getByRole('button', { name: /cadastrar/i }));
});
