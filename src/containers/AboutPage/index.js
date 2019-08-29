import React from 'react'
import { Helmet } from 'react-helmet'

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <main ref="main">
          <Helmet
            titleTemplate="About Page"
            defaultTitle="About Page"
          >
            <meta name="description" content="About Page" />
          </Helmet>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </section>
          </div>
        </main>
      </>
    )
  }
}

export default AboutPage