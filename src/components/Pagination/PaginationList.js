import React from 'react'
import { connect } from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import {
  getTrainings
} from '../../containers/App/trainings/actions'

class PaginationList extends React.Component {
  constructor(props) {
    super(props)

    this.perPage = this.props.trainings.perPage
    this.lastPage = this.props.trainings.lastPage

    this.state = {
      currentPage: this.props.trainings.page
    }
  }

  handleClick(e, index) {
    e.preventDefault()

    this.setState({
      currentPage: index
    })
  }

  render() {
    const { currentPage } = this.state

    return (
      <>
        <Pagination aria-label="Page navigation">
            
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              onClick={e => this.handleClick(e, currentPage - 1)}
              previous
              href="#"
            />
          </PaginationItem>

          {[...Array(this.lastPage)].map((page, i) => 
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem disabled={currentPage >= this.lastPage - 1}>
            <PaginationLink
              onClick={e => this.handleClick(e, currentPage + 1)}
              next
              href="#"
            />
          </PaginationItem>
          
        </Pagination>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings())
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList)
