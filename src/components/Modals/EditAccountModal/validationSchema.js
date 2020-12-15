import * as Yup from 'yup'
import i18n from 'i18next'

export default Yup.object().shape({
  name: Yup.string('')
    .min(3, i18n.getResource(i18n.language, 'translation', 'components.modals.editAccountModal.nameValidation.min'))
    .max(30, i18n.getResource(i18n.language, 'translation', 'components.modals.editAccountModal.nameValidation.max'))
    .required(i18n.getResource(i18n.language, 'translation', 'components.modals.editAccountModal.nameValidation.required'))
})
