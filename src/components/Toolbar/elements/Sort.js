import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from 'reactstrap'

import {
  getTrainings
} from 'store/trainings/actions'

class Sort extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    localStorage.setItem('listing_sort', value)
    this.props.getTrainings()
  }

  render() {
    const { t } = this.props
    return (
      <InputGroup className="input-group-alternative mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="fa fa-sort" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="select"
          name="sort"
          value={this.props.trainings.sort}
          onChange={this.handleChange}
          className="form-control-alternative"
        >
          <option value="1">{ t('components.toolbar.sort.newest') }</option>
          <option value="2">{ t('components.toolbar.sort.likes') }</option>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Sort))
