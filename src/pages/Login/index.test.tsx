import React from 'react';
import { mount } from 'enzyme';
import Logar from '.';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });

// Descrever o que será testado
describe('Testando o componente Logar', () => {
  // Definir uma variável para armazenar o wrapper do componente
  let wrapper: any;

  // Antes de cada teste, montar o componente com enzyme
  beforeEach(() => {
    wrapper = mount(<Logar />);
  });

  // Testar se o componente tem os elementos esperados
  test('Deve ter um formulário com três inputs', () => {
    expect(wrapper.find('input')).toHaveLength(3);
  });

  // Testar se o componente tem as funções esperadas
  test('Deve ter uma função handleSubmit que valida o login', () => {
    // Simular um evento de submit com dados inválidos
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        email: { value: 'invalido@teste.com' },
        password: { value: '123456' },
      },
    });
    // Esperar que seja exibido um alerta de erro
    // Criar um spy da função window.alert
    const spy = jest.spyOn(window, 'alert');
    // Simular um evento de submit com dados inválidos
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        email: { value: 'invalido@teste.com' },
        password: { value: '123456' },
      },
    });

    // Esperar que seja exibido um alerta de erro
    expect(spy).toHaveBeenCalledWith('Digite um E-mail!');

    // Simular um evento de submit com dados válidos
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        email: { value: 'valido@teste.com' },
        password: { value: '123456' },
      },
    });
    // Esperar que seja redirecionado para a página inicial
    expect(window.location.href).toEqual('http://localhost/');
  });
});
