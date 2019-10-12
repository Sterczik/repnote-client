import * as Yup from 'yup'

export default Yup.object().shape({
  oldPassword: Yup.string('')
    .min(6, 'Password must contain at least 6 characters')
    .max(30, 'Password must contain maximum 30 characters')
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, 'Password must contain at least 1 number, 1 capital and 1 small letter')
    .required('Enter your old password'),

  newPassword: Yup.string('')
    .min(6, 'Password must contain at least 6 characters')
    .max(30, 'Password must contain maximum 30 characters')
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, 'Password must contain at least 1 number, 1 capital and 1 small letter')
    .required('Enter your new password'),

  newPasswordConfirm: Yup.string('')
    .oneOf([Yup.ref('newPassword')], 'Password does not match')
    .required('Confirm your new password')
})
