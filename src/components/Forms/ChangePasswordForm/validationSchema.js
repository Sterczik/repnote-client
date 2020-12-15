import * as Yup from 'yup'
import i18n from 'i18next'

export default Yup.object().shape({
  oldPassword: Yup.string('')
    .min(6, i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.min'))
    .max(30, i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.max'))
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.matches'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.required')),

  newPassword: Yup.string('')
    .min(6, i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.min'))
    .max(30, i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.max'))
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.matches'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.required')),

  newPasswordConfirm: Yup.string('')
    .oneOf([Yup.ref('newPassword')], i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.confirm'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.changePassword.passwordValidation.required'))
})
