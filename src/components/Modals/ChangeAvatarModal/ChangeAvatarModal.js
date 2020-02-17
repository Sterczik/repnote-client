import React from 'react'
import { Formik, Field } from 'formik'
import {
  Button,
  Form,
  Modal
} from 'reactstrap'
import validationSchema from './validationSchema'
import CustomImageInput from './CustomImageInput'

class ChangeAvatarModal extends React.Component {
  state = {
    selectedFile: null
  }

  render() {
    return (
      <Modal
        className="modal-dialog-centered"
        isOpen={this.props.changeAvatarModal}
        toggle={() => this.props.toggleModal("changeAvatarModal")}
      >
        <Formik
          initialValues={{
            file: undefined
          }}
          validationSchema={validationSchema}
          validateOnBlur={true}
          onSubmit={(values, actions) => {
            this.props.changeAvatar(values.file)
            this.props.toggleModal('changeAvatarModal')
          }}
        >
          { (formikProps) => {
            const {
              errors,
              touched,
              isSubmitting,
              handleBlur,
              handleSubmit,
              setFieldValue
            } = formikProps

            return (
              <Form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title" id="changeAvatarLabel">
                    Change your avatar
                  </h5>
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.props.toggleModal("changeAvatarModal")}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Field
                    name="file"
                    component={CustomImageInput}
                    title="Select a file"
                    setFieldValue={setFieldValue}
                    errorMessage={errors["file"] ? errors["file"] : undefined}
                    touched={touched["file"]}
                    style={{ display: "flex" }}
                    onBlur={handleBlur}
                  />
                  {/* <pre>
                    {values.file
                      ? JSON.stringify(
                          {
                            fileName: values.file.name,
                            type: values.file.type,
                            size: `${values.file.size} bytes`
                          },
                          null,
                          2
                        )
                      : null}
                  </pre> */}
                </div>
                <div className="modal-footer">
                  <Button
                    color="secondary"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.props.toggleModal("changeAvatarModal")}
                  >
                    Close
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Upload image
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </Modal>
    )
  }
}

export default ChangeAvatarModal
