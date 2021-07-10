import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media(min-width: 768px) {
    margin: 0 auto;
    width: 60%;
  }
`;

export const Titulo = styled.h2`
  margin-top: 50px;
`;

export const InputNome = styled(TextField)`
  margin-bottom: 30px;
`;