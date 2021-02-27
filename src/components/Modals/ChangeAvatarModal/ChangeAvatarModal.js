import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { Formik, Field } from 'formik'
import {
  Button,
  Form,
  Modal
} from 'reactstrap'
import validationSchema from './validationSchema'
import CustomImageInput from './CustomImageInput'

class ChangeAvatarModal extends Component {
  state = {
    selectedFile: null
  }

  render() {
    const { t } = this.props
    return (
      <Modal
        className="modal-dialog-centered"
        isOpen={this.props.changeAvatarModal}
        toggle={() => this.props.toggleModal("changeAvatarModal")}
      >
        <Formik
          initialValues={{
            file: null
          }}
          validationSchema={validationSchema}
          validateOnBlur={true}
          onSubmit={(values, actions) => {
            if (values.file) {
              this.props.changeAvatar(values.file)
              this.props.toggleModal('changeAvatarModal')
            }
          }}
        >
          { (formikProps) => {
            const {
              errors,
              touched,
              isSubmitting,
              isValid,
              handleBlur,
              handleSubmit,
              setFieldValue
            } = formikProps

            return (
              <Form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title" id="changeAvatarLabel">
                    { t('components.modals.changeAvatarModal.header') }
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
                  <h6 className="display-6">{ t('components.modals.changeAvatarModal.maxSize') } 1 MB</h6>
                  <h6 className="display-6">{ t('components.modals.changeAvatarModal.formats') } jpg, jpeg, png</h6>
                  <Field
                    name="file"
                    component={CustomImageInput}
                    title={ t('components.modals.changeAvatarModal.select') }
                    setFieldValue={setFieldValue}
                    errorMessage={errors["file"] ? errors["file"] : undefined}
                    touched={touched["file"]}
                    style={{ display: "flex" }}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="modal-footer">
                  <Button
                    color="secondary"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.props.toggleModal("changeAvatarModal")}
                  >
                    { t('components.modals.changeAvatarModal.close') }
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                  >
                    { t('components.modals.changeAvatarModal.submit') }
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

export default withTranslation()(ChangeAvatarModal)
