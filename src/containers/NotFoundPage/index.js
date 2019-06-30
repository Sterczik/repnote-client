import React from 'react'
import { Helmet } from 'react-helmet'

export const NotFoundPage = () => (
  <>
    <Helmet
        titleTemplate="Register Fail"
        defaultTitle="Register Fail"
      >
        <meta name="description" content="Register Fail" />
    </Helmet>
    Go home
  </>
)

export default NotFoundPage
