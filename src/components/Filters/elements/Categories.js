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
  getTrainings,
  setTrainingCategoryFilter
} from 'store/trainings/actions'

class Categories extends Component {
  
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    this.props.setTrainingCategoryFilter(value)
    this.props.getTrainings()
  }

  render() {
    const { t } = this.props
    return (
      <InputGroup className="input-group-alternative mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="fa fa-book" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="select"
          name="filterTrainingCategory"
          value={this.props.activeCategory}
          onChange={this.handleChange}
          className="form-control-alternative"
        >
          <option key="0" value="0">
            { t('components.filters.trainingCategory') }
          </option>
          { this.props.trainingCategories && this.props.trainingCategories.map((trainingCategory) => (
            <option key={trainingCategory.id} value={trainingCategory.id}>
              { trainingCategory.name }
            </option>
          )) }
        </Input>
      </InputGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.trainings.activeTrainingCategoryFilter,
  trainingCategories: state.global.trainingCategories,
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  setTrainingCategoryFilter: (value) => dispatch(setTrainingCategoryFilter(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Categories))
