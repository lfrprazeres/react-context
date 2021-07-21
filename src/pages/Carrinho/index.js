import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCarrinhoContext } from 'common/contexts/Carrinho';
import Produto from 'components/Produto';
import { useContext, useMemo, useState } from 'react';
import { Container, Voltar, TotalContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from 'common/contexts/Usuario';

function Carrinho() {
  const { 
    carrinho,
    quantidadeCarrinho,
    comprar,
    valorTotal = 0
  } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const history = useHistory();
  const total = useMemo(() => saldo - valorTotal, [saldo, valorTotal]);
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
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valorTotal.toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {saldo.toFixed(2)} </span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ {total.toFixed(2)} </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          comprar();
          setOpenSnackbar(true);
        }}
        disabled={quantidadeCarrinho === 0 || total < 0}
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