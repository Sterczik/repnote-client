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

class Sort extends React.Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    localStorage.setItem('sort', value)
    this.props.getTrainings()
  }

  render() {
    return (
      <InputGroup className="input-group-alternative mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="ni ni-email-83" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Sort"
          type="select"
          name="sort"
          value={this.props.trainings.sort}
          onChange={this.handleChange}
          className="form-control-alternative"
        >
          <option value="1">Najnowsze</option>
          <option value="2">Najlepiej oceniane</option>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
