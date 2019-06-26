import React from 'react'
import PrivateRoute from '../routes/PrivateRoute'
import PublicRoute from '../routes/PublicRoute'
import NormalRoute from '../routes/NormalRoute'

const getRoutes = (routes, layout) => {
  return routes.map((prop, key) => {
    if (prop.layout === `/${layout}`) {
      if (prop.type === 'Normal') {
        return (
          <NormalRoute
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else if (prop.type === 'Private') {
        return (
          <PrivateRoute
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return (
          <PublicRoute
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      }
    } else {
      return null
    }
  })
}

export default getRoutes