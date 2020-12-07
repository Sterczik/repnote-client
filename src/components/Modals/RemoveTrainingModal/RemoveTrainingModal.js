import React from 'react'
import { withTranslation } from 'react-i18next'
import {
  Button,
  Modal
} from 'reactstrap'

const RemoveTrainingModal = (props) => {
  return (
    <Modal
      className="modal-dialog-centered"
      isOpen={props.removeTrainingModal}
      toggle={() => props.toggleModal('removeTrainingModal')}
    >
      <div className="modal-header">
        <h5 className="modal-title" id="removeTrainingModalLabel">
          { props.t('components.modals.removeTrainingModal.header') }
        </h5>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={() => props.toggleModal("removeTrainingModal")}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
        <h5>{ props.t('components.modals.removeTrainingModal.text') }</h5>
      </div>
      <div className="modal-footer">
        <Button
          color="secondary"
          data-dismiss="modal"
          type="button"
          onClick={() => props.toggleModal("removeTrainingModal")}
        >
          { props.t('components.modals.removeTrainingModal.close') }
        </Button>
        <Button
          color="primary"
          type="submit"
          onClick={() => props.removeTraining(props.id)}
        >
          { props.t('components.modals.removeTrainingModal.submit') }
        </Button>
      </div>
    </Modal>
  )
}

export default withTranslation()(RemoveTrainingModal)