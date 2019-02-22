import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const StyledHeader = styled.div`
  flex-grow: 1;
`

const HeaderTypo = styled(Typography)`
  flex-grow: 1;
`

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export {
  StyledHeader,
  HeaderTypo,
  HeaderLink
}