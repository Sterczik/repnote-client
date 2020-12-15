import * as Yup from 'yup'
import i18n from 'i18next'

export default Yup.object().shape({
  email: Yup.string('')
    .email(i18n.getResource(i18n.language, 'translation', 'components.forms.signIn.emailValidation.email'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.signIn.emailValidation.required')),

  password: Yup.string('')
    .min(6, i18n.getResource(i18n.language, 'translation', 'components.forms.signIn.passwordValidation.min'))
    .max(30, i18n.getResource(i18n.language, 'translation', 'components.forms.signIn.passwordValidation.max'))
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, i18n.getResource(i18n.language, 'translation', 'components.forms.signIn.passwordValidation.matches'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.signIn.passwordValidation.required'))
})
