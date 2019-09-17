import React from 'react'
import { connect } from 'react-redux'

import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button
} from 'reactstrap'

import {
  getTrainings,
  setSearch
} from '../../../containers/App/trainings/actions'

class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      search: props.trainings.search
    }

    this.handleChange = this.handleChange.bind(this)
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

  render() {
    return (
      <InputGroup className="input-group-alternative mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="ni ni-email-83" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Search"
          type="text"
          name="search"
          value={this.props.trainings.search}
          onChange={this.handleChange}
          className="form-control-alternative"
        />
        <Button
          onClick={e => this.handleSearch()}
          className=""
          color="primary"
        >
          Search
        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)
