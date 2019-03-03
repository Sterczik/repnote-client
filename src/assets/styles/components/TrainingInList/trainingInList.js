import styled from 'styled-components';

const StyledTrainingInList = styled.div`
  flex-basis: 100%;
  margin: 8px;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 16px);
  }
  @media (min-width: 1280px) {
    flex-basis: calc(33% - 16px);
  }
`

const TrainingInListWrapper = styled.div`
  border: 1px solid #bbb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  box-shadow: 4px 8px 15px #888;
  padding: 10px;
`

export {
  StyledTrainingInList,
  TrainingInListWrapper
}
