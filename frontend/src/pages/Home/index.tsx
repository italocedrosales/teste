import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

import api from '../../services/api';

import { Title, Form, Button } from './styles';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handelSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await api.post('/users', {
        name,
        lastname,
        email,
        password,
      });

      setName('');
      setLastname('');
      setEmail('');
      setPassword('');

      history.push('/dashboard');
    } catch (error) {
      alert('Falha no cadastro, tente novamente.');
    }
  }

  return (
    <>
      <Title>Cadastrar Usuário</Title>

      <Form onSubmit={handelSubmitForm}>
        <h2>Informe seus dados</h2>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sobbrenome"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <p>
          Ao se cadastrar você automaticamente concorda com nossos
          <a href="/"> Termos de Uso</a>
        </p>

        <Button>
          <FaPaperPlane />
          Cadastrar
        </Button>
      </Form>
    </>
  );
};
export default Home;
