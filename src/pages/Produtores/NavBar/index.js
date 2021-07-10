import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

export default function NavBar() {
  return (
    <Nav>
      <Logo />
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
    </Nav>
  )
}