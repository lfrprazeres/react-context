import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Container = styled(Card)`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  p {
    font-size: 22px;
    font-weight: bold;
    padding: 5px 0 0 5px;
  }
`;