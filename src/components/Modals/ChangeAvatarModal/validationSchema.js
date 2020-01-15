import * as Yup from 'yup'

const avatarSize = 15 * 1024
const avatarFormats = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

export default Yup.object().shape({
  file: Yup.mixed()
    .required('A file is required')
    .test('fileSize', 'File Size is too large', value => value.size <= avatarSize)
    .test('fileFormat', 'Unsupported File Format', value => avatarFormats.includes(value.type))
})
