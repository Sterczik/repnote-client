import React from 'react'
import { Helmet } from 'react-helmet'

export const NotFoundPage = () => (
  <>
    <Helmet
        titleTemplate="Page not found"
        defaultTitle="Page not found"
      >
        <meta name="description" content="Page not found" />
    </Helmet>
    Go home
  </>
)

export default NotFoundPage
