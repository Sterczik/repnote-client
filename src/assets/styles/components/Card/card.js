import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const StyledCard = styled(Card)`
  margin: 10px 0;
`

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardForm = styled.form`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    margin-top: 0;
  }
`

const CardFormTraining = styled(CardForm)`
  width: 60%;
  flex-direction: column;
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
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  div {
    width: 95%;
  }
`

const CardFormRoundCenter = styled(CardFormRound)`
  justify-content: center;
  div {
    width: 100%;
  }
`

const CardIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardIcon = styled.div`
  margin: 0 15px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`

const CardText = styled.div`
  color: #333 !important;
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
  CardIcons,
  CardIcon,
  CardText
}