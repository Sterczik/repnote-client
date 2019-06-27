import React from 'react'
import { Helmet } from 'react-helmet'

export const CheckEmail = () => (
  <>
    <Helmet
      titleTemplate="Check email"
      defaultTitle="Check email"
    >
      <meta name="description" content="Check email" />
    </Helmet>
    Check out your email to reset password. Click link to continue.
  </>
)

export default CheckEmail
