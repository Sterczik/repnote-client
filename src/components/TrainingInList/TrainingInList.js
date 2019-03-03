import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {
  StyledTrainingInList,
  TrainingInListWrapper
} from '../../assets/styles/components/TrainingInList/trainingInList';

const TrainingInList = ({ training }) => (
  <StyledTrainingInList>
    <TrainingInListWrapper>
      <Typography variant="headline" color="inherit">
        { training.name }
      </Typography>
      <Typography variant="subheading" color="inherit">
        {`By: ${training.user.name}`}
      </Typography>
      <Typography variant="title" color="primary">
        <Link to={'/trainings/' + training.id}>Go to training</Link>
      </Typography>
    </TrainingInListWrapper>  
  </StyledTrainingInList>
);

export default TrainingInList;
