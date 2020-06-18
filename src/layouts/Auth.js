import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { routes } from 'routes'
import getRoutes from 'helpers/getRoutes'
import NotFoundPage from 'containers/NotFoundPage/index'
import SimpleNavbar from 'components/Navbars/SimpleNavbar'
import SimpleFooter from 'components/Footers/SimpleFooter'

class Auth extends React.Component {
  state = {}
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {
    if (getRoutes(routes, 'auth')) {
      return (
        <>
          <SimpleNavbar />
          <main ref="main">
            <section className="section section-shaped section-lg">
              <div className="shape shape-style-1 bg-gradient-info"></div>
              <Switch>{ getRoutes(routes, 'auth') }</Switch>
            </section>
          </main>
          <SimpleFooter />
        </>
      )
    } else {
      return <Route component={ NotFoundPage } />
    }
  }
}

export default Auth
