import React from 'react'
import { Formik } from 'formik'
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal
} from 'reactstrap'
import validationSchema from './validationSchema'

const EditAccountModal = (props) => {
  return (
    <Modal
      className="modal-dialog-centered"
      isOpen={props.editAccountModal}
      toggle={() => props.toggleModal('editAccountModal')}
    >
      <Formik
        initialValues={{ name: props.user.name, description: props.user.description }}
        validationSchema={validationSchema}
        validateOnBlur={true}
        onSubmit={(values, actions) => {
          props.editProfile(values.name, values.description)
          props.toggleModal('editAccountModal')
        }}
      >
        { (formikProps) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = formikProps

          return (
            <Form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="editAccountModalLabel">
                  Edit your account
                </h5>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => props.toggleModal("editAccountModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && (
                      <div className="input-feedback">{errors.name}</div>
                    )}
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-file-text-o" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Description"
                      type="textarea"
                      id="description"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    {errors.description && touched.description && (
                      <div className="input-feedback">{errors.description}</div>
                    )}
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="modal-footer">
                <Button
                  color="secondary"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => props.toggleModal("editAccountModal")}
                >
                  Close
                </Button>
                <Button color="primary" type="submit" disabled={isSubmitting}>
                  Save changes
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}

export default EditAccountModal