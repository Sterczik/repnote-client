import * as Yup from 'yup'
import i18n from 'i18next'

export default Yup.object().shape({
  email: Yup.string('')
    .email(i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.emailValidation.email'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.emailValidation.required')),

  name: Yup.string('')
    .min(3, i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.nameValidation.min'))
    .max(30, i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.nameValidation.max'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.nameValidation.required')),

  password: Yup.string('')
    .min(6, i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.passwordValidation.min'))
    .max(30, i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.passwordValidation.max'))
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.passwordValidation.matches'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.passwordValidation.required')),

  passwordConfirm: Yup.string('')
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.passwordValidation.required'))
    .oneOf([Yup.ref('password')], i18n.getResource(i18n.language, 'translation', 'components.forms.signUp.passwordValidation.confirm'))
})
