import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { routes } from '../routes'
import getRoutes from '../helpers/getRoutes'
import NotFoundPage from '../containers/NotFoundPage/index'
import TrainingsNavbar from '../components/Navbars/TrainingsNavbar'
import SimpleFooter from '../components/Footers/SimpleFooter'

class Trainings extends React.Component {
  render() {
    if (getRoutes(routes, 'trainings')) {
      return (
        <>
          <TrainingsNavbar />
          <main ref="main">
            <Switch>{ getRoutes(routes, 'trainings') }</Switch>
          </main>
          <SimpleFooter />
        </>
      )
    } else {
      return <Route component={ NotFoundPage } />
    }
  }
}

export default Trainings
   