import { Container } from './styles';
import Card from '@material-ui/core/Card';


export default function Produtores({ nome, foto }) {
  return (
    <Card>
      <Container>
        <img src={foto} alt={`foto de ${nome}`} />
        <p>
          {nome}
        </p>
      </Container>
    </Card>
  )
}