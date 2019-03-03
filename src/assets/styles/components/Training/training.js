import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent';

const StyledTraining = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

const TrainingSection = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`

const TrainingExercise = styled.div`
  margin: 30px 0;
`

const TrainingRound = styled.div`
  margin: 10px 0;
`

export {
  StyledTraining,
  TrainingSection,
  TrainingExercise,
  TrainingRound
}
