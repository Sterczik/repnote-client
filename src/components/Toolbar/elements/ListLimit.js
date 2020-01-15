import React from 'react'
import { connect } from 'react-redux'

import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from 'reactstrap'

import {
  getTrainings
} from '../../../containers/App/trainings/actions'

class ListLimit extends React.Component {
  
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    localStorage.setItem('perPage', value)
    this.props.getTrainings()
  }

  render() {
    return (
      <InputGroup className="input-group-alternative mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="fa fa-file-o" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="select"
          name="limit"
          value={this.props.trainings.perPage}
          onChange={this.handleChange}
          className="form-control-alternative"
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </Input>
      </InputGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListLimit)
