import React from 'react'
import { Helmet } from 'react-helmet'
import ContactForm from '../../components/Forms/ContactForm/ContactForm'

export const ContactPage = () => (
  <>
    <Helmet
        titleTemplate="Contact Us"
        defaultTitle="Contact Us"
      >
        <meta name="description" content="Contact Us" />
    </Helmet>
    <ContactForm />
  </>
)

export default ContactPage
