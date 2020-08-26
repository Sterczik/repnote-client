import React from 'react'
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
          Are you sure?
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
        <h5>This action will remove your training permanently.</h5>
      </div>
      <div className="modal-footer">
        <Button
          color="secondary"
          data-dismiss="modal"
          type="button"
          onClick={() => props.toggleModal("removeTrainingModal")}
        >
          Close
        </Button>
        <Button
          color="primary"
          type="submit"
          onClick={() => props.removeTraining(props.id)}
        >
          Delete
        </Button>
      </div>
    </Modal>
  )
}

export default RemoveTrainingModal