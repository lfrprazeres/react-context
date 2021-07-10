import { Button } from '@material-ui/core';
import { Container, Titulo, InputNome } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';

function Login() {
  const history = useHistory();
  const { nome, setNome } = useContext(UsuarioContext);

  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputNome
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        label="Nome"
      />
      <Button
        variant="contained"
        color="primary"
        disabled={'nome'.length < 4}
        onClick={() => history.push('/produtores')}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;