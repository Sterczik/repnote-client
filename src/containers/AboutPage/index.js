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
                  <Row className="text-white">
                    Morbi egestas vehicula tincidunt. Donec sollicitudin sollicitudin eros. Maecenas ultrices, tellus vitae maximus dignissim, odio erat cursus leo, convallis commodo eros libero vel enim. Donec sit amet mauris eu mi dictum vulputate at at augue.
                  </Row>
                  <Row className="text-white">
                    Aliquam aliquam faucibus turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec suscipit sagittis erat eget porttitor. Etiam id est at lacus fermentum consectetur.
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