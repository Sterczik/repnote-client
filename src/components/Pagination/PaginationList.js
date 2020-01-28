import React from 'react'
import { connect } from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import {
  getTrainings,
  setPage
} from '../../containers/App/trainings/actions'

const PaginationList = (props) => {
  return (
    <>
      <Pagination aria-label="Page navigation">

        { props.trainings.page !== 1 ? (
          <PaginationItem disabled={props.trainings.page <= 1}>
            <PaginationLink
              onClick={e => props.setPage(1)}
              href="#"
            >
              1
            </PaginationLink>
          </PaginationItem>
        ) : null }
        
        { props.trainings.page !== 1 ? (
          <PaginationItem disabled={props.trainings.page <= 1}>
            <PaginationLink
              onClick={e => props.setPage(props.trainings.page - 1)}
              previous
              href="#"
            />
          </PaginationItem>
        ) : null }

        { (props.trainings.page - 1) >= 1 ? (
          <PaginationItem disabled={(props.trainings.page - 1) <= 1}>
            <PaginationLink onClick={e => props.setPage(props.trainings.page - 1)} href="#">
              { props.trainings.page - 1 }
            </PaginationLink>
          </PaginationItem>
        ) : null }

        <PaginationItem active={true}>
          <PaginationLink href="#">
            { props.trainings.page }
          </PaginationLink>
        </PaginationItem>

        { (props.trainings.page + 1) <= props.trainings.lastPage ? (
          <PaginationItem disabled={(props.trainings.page + 1) >= props.trainings.lastPage}>
            <PaginationLink onClick={e => props.setPage(props.trainings.page + 1)} href="#">
              { props.trainings.page + 1 }
            </PaginationLink>
          </PaginationItem>
        ) : null }

        { props.trainings.page !== props.trainings.lastPage ? (
          <PaginationItem disabled={props.trainings.page >= props.trainings.lastPage}>
            <PaginationLink
              onClick={e => props.setPage(props.trainings.page + 1)}
              next
              href="#"
            />
          </PaginationItem>
        ) : null }

        { props.trainings.page !== props.trainings.lastPage ? (
          <PaginationItem disabled={props.trainings.page >= props.trainings.lastPage}>
            <PaginationLink
              onClick={e => props.setPage(props.trainings.lastPage)}
              href="#"
            >
              { props.trainings.lastPage }
            </PaginationLink>
          </PaginationItem>
        ) : null }
        
      </Pagination>
    </>
  )
}

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  setPage: (value) => dispatch(setPage(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList)
