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
  setSearch
} from 'store/trainings/actions'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      search: props.trainings.search
    }

    this.handleChange = this.handleChange.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    this.setState({
      search: value
    })
  }

  handleSearch() {
    this.props.setSearch(this.state.search)
    this.props.getTrainings()
  }

  clearSearch() {
    const value = ''
    this.setState({
      search: value
    })
    this.props.setSearch(value)
    this.props.getTrainings()
  }

  render() {
    const { t } = this.props
    return (
      <InputGroup className="input-group-alternative mb-3">
        <Input
          placeholder={ t('components.toolbar.search') }
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
          className="form-control-alternative"
        />
        <InputGroupAddon addonType="append">
          <InputGroupText
            onClick={e => this.handleSearch()}>
            <i className="fa fa-search" />
          </InputGroupText>
          <InputGroupText
            onClick={this.clearSearch}>
            <i className="fa fa-close" />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  setSearch: (value) => dispatch(setSearch(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Search))
