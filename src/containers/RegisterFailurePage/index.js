import React from 'react'
import { Helmet } from 'react-helmet'

export const RegisterFailurePage = () => (
  <>
    <Helmet
      titleTemplate="Register Fail"
      defaultTitle="Register Fail"
    >
      <meta name="description" content="Register Fail" />
    </Helmet>
    Something went wrong. Please try again
    <a href="/auth/register">Register again</a>
  </>
)

export default RegisterFailurePage
