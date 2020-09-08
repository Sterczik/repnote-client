import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string('')
    .min(6, 'Name must contain at least 6 characters')
    .max(30, 'Name must contain maximum 30 characters')
    .required('Enter your name')
})
