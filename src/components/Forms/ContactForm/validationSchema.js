import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string('')
    .min(3, 'Name must contain at least 3 characters')
    .max(40, 'Name must contain maximum 40 characters')
    .required('Enter your name'),

  email: Yup.string('')
    .max(50, 'Email must contain maximum 50 characters')
    .required('Enter your email'),

  message: Yup.string('')
    .min(10, 'Message must contain at least 10 characters')
    .max(1000, 'Message must contain maximum 1000 characters')
    .required('Enter your mesaage')
})
