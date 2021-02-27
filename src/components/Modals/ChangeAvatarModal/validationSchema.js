import * as Yup from 'yup'
import i18n from 'i18next'

const avatarSize = 1024 * 1024
const avatarFormats = ['image/jpg', 'image/jpeg', 'image/png']

export default Yup.object().shape({
  file: Yup.mixed()
    .required(i18n.getResource(i18n.language, 'translation', 'components.modals.changeAvatarModal.avatarValidation.required'))
    .test('fileSize', i18n.getResource(i18n.language, 'translation', 'components.modals.changeAvatarModal.avatarValidation.size'), value => value.size <= avatarSize)
    .test('fileFormat', i18n.getResource(i18n.language, 'translation', 'components.modals.changeAvatarModal.avatarValidation.format'), value => avatarFormats.includes(value.type))
})
