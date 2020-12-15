import * as Yup from 'yup'
import i18n from 'i18next'

export default Yup.object().shape({
  name: Yup.string('')
    .min(3, i18n.getResource(i18n.language, 'translation', 'components.forms.contact.nameValidation.min'))
    .max(40, i18n.getResource(i18n.language, 'translation', 'components.forms.contact.nameValidation.max'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.contact.nameValidation.required')),

  email: Yup.string('')
    .email(i18n.getResource(i18n.language, 'translation', 'components.forms.contact.emailValidation.email'))
    .max(50, i18n.getResource(i18n.language, 'translation', 'components.forms.contact.emailValidation.max'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.contact.emailValidation.required')),

  message: Yup.string('')
    .min(10, i18n.getResource(i18n.language, 'translation', 'components.forms.contact.messageValidation.min'))
    .max(1000, i18n.getResource(i18n.language, 'translation', 'components.forms.contact.messageValidation.max'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.forms.contact.messageValidation.required'))
})
