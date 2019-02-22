import styled from 'styled-components';
import { Form } from 'formik';

const StyledForm = styled(Form)`
  max-width: 600px;
  margin: 20px auto;
`

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export {
  StyledForm,
  FormButtons
}