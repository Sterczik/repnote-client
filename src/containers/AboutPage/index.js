import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Container,
  Row
} from 'reactstrap'

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
            <section className="section section-lg section-shaped">
              <div className="shape shape-style-1 shape-default"></div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate lacinia bibendum. Donec a tristique odio. Vivamus non porta sem. Morbi pellentesque auctor arcu vel finibus. Fusce eget facilisis felis. Morbi ac vulputate sapien. Duis a enim nisi.
                  </Row>
                </div>
              </Container>
            </section>
          </div>
        </main>
      </>
    )
  }
}

export default AboutPage