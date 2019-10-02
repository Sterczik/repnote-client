import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { routes } from '../routes'
import getRoutes from '../helpers/getRoutes'
import NotFoundPage from '../containers/NotFoundPage/index'
import SimpleNavbar from '../components/Navbars/SimpleNavbar'
import SimpleFooter from '../components/Footers/SimpleFooter'

class Users extends React.Component {
  state = {}
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {
    if (getRoutes(routes, 'users')) {
      return (
        <>
          <SimpleNavbar />
          <main ref="main">
            <Switch>{ getRoutes(routes, 'users') }</Switch>
          </main>
          <SimpleFooter />
        </>
      )
    } else {
      return <Route component={ NotFoundPage } />
    }
  }
}

export default Users
   