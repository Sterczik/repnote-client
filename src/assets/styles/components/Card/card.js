import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ValidatorForm } from 'react-material-ui-form-validator';

const StyledCard = styled(Card)`
  margin: 10px 0;

  .card__icon {
    margin: 0 15px;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardForm = styled(ValidatorForm)`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    margin-top: 0;
  }
`

const CardFormTraining = styled(CardForm)`
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1280px) {
    width: 70%;
  }
`

const CardFormRow = styled.div`
  width: 100%;
  margin: 30px 0;
`

const CardFormRowCenter = styled(CardFormRow)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardFormRowNoMargin = styled(CardFormRow)`
  margin: 0;
`

const CardFormRound = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
  div {
    width: 95%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const CardFormRoundCenter = styled(CardFormRound)`
  div {
    width: 100%;
  }
  @media (min-width: 768px) {
    justify-content: center;
  }
`

const CardIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  StyledCard,
  StyledCardContent,
  CardForm,
  CardFormTraining,
  CardFormRow,
  CardFormRowCenter,
  CardFormRowNoMargin,
  CardFormRound,
  CardFormRoundCenter,
  CardIcons
}