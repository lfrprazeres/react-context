import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCarrinhoContext } from 'common/contexts/Carrinho';
import Produto from 'components/Produto';
import { useState } from 'react';
import { Container, Voltar } from './styles';
import { useHistory } from 'react-router-dom';

function Carrinho() {
  const { 
    carrinho,
    quantidadeCarrinho,
    setCarrinho
  } = useCarrinhoContext();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const history = useHistory();
  return (
    <Container>
      <Voltar onClick={history.goBack} />
      <h2>
        Carrinho
      </h2>
      {carrinho.map((produto) => (
        <Produto 
          {...produto}
          key={produto.id}
        />
      ))}
      <Button
        onClick={() => {
          setCarrinho([]);
          setOpenSnackbar(true);
        }}
        disabled={quantidadeCarrinho === 0}
        color="primary"
        variant="contained"
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;