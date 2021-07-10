import styled from 'styled-components';
import CardActionArea from '@material-ui/core/CardActionArea';

export const Container = styled(CardActionArea)`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  p {
    font-weight: bold;
    padding: 5px 0 0 5px;
  }
`;