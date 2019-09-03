import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string('')
    .min(6, 'Name must contain at least 6 characters')
    .max(30, 'Name must contain maximum 30 characters')
    .required('Enter your name'),

  email: Yup.string('')
    .min(6, 'Email must contain at least 6 characters')
    .max(50, 'Email must contain maximum 50 characters')
    .required('Enter your email'),

  message: Yup.string('')
    .min(6, 'Message must contain at least 6 characters')
    .max(1000, 'Message must contain maximum 1000 characters')
    .required('Enter your mesaage')
})
