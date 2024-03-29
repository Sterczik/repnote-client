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
  setTrainingAdvancementLevelFilter
} from 'store/trainings/actions'

class AdvancementLevels extends Component {
  
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    this.props.setTrainingAdvancementLevelFilter(value)
    this.props.getTrainings()
  }

  render() {
    const { t } = this.props
    return (
      <InputGroup className="input-group-alternative mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="fa fa-level-up" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="select"
          name="filterTrainingAdvancementLevel"
          value={this.props.activeAdvancementLevel}
          onChange={this.handleChange}
          className="form-control-alternative"
        >
          <option key="0" value="0">
            { t('components.filters.advancementLevel') }
          </option>
          { this.props.advancementLevels && this.props.advancementLevels.map((trainingAdvancementLevel) => (
            <option key={trainingAdvancementLevel.id} value={trainingAdvancementLevel.id}>
              { trainingAdvancementLevel.name }
            </option>
          )) }
        </Input>
      </InputGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  activeAdvancementLevel: state.trainings.activeTrainingAdvancementLevelFilter,
  advancementLevels: state.global.advancementLevels
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  setTrainingAdvancementLevelFilter: (value) => dispatch(setTrainingAdvancementLevelFilter(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(AdvancementLevels))
