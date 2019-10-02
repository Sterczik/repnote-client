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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate lacinia bibendum. Donec a tristique odio. Vivamus non porta sem. Morbi pellentesque auctor arcu vel finibus. Fusce eget facilisis felis. Morbi ac vulputate sapien. Duis a enim nisi. Mauris tempus feugiat sollicitudin. Integer egestas risus id pharetra consequat. Proin lacinia sed velit non posuere. Curabitur ac ex dolor. Maecenas sed fringilla justo.
                  </Row>
                  <Row className="text-white">
                    Morbi egestas vehicula tincidunt. Donec sollicitudin sollicitudin eros. Maecenas ultrices, tellus vitae maximus dignissim, odio erat cursus leo, convallis commodo eros libero vel enim. Donec sit amet mauris eu mi dictum vulputate at at augue. Proin lobortis, purus sed cursus semper, nunc tellus aliquet purus, in laoreet arcu nibh quis nisi. Vestibulum ultrices erat magna, quis pharetra lectus fringilla quis. Vestibulum at urna nisi. Cras blandit varius finibus.
                  </Row>
                  <Row className="text-white">
                    Aenean imperdiet luctus dapibus. Integer facilisis, ligula in egestas elementum, ligula lectus semper leo, nec tincidunt sem massa eget purus. Quisque eu iaculis lorem. Donec scelerisque euismod nibh, et congue libero efficitur et. Morbi at auctor magna, vitae elementum sem. Nunc id faucibus urna. Phasellus et semper justo, nec ultrices tortor. Sed pulvinar sagittis molestie. Phasellus eleifend risus a mi ornare feugiat. Sed eu venenatis ipsum. Fusce aliquet suscipit leo, nec facilisis est condimentum a. Nullam congue odio lectus, eu interdum lacus molestie vitae. Curabitur dolor orci, placerat vel dolor ut, venenatis gravida metus. Curabitur dapibus nisl non dapibus consectetur. Integer dignissim dignissim odio eu ultrices. Donec sodales enim ante, ac iaculis justo sagittis at.
                  </Row>
                  <Row className="text-white">
                    Aenean gravida felis nec ex pharetra rhoncus. Nam ante ex, tristique in egestas at, ultricies vitae diam. Nunc in blandit lorem, vel facilisis nisi. Maecenas accumsan quam vitae nisl aliquet cursus vitae eu eros. Donec ligula justo, sollicitudin in ante et, viverra ultrices augue. Cras auctor, magna sed malesuada malesuada, erat dui finibus magna, in feugiat ipsum dolor luctus nunc. Cras vitae magna a eros consequat finibus at maximus lectus. Etiam iaculis tellus velit, molestie gravida nisl porttitor sit amet. Nunc pharetra, tortor ut scelerisque malesuada, eros ante finibus magna, eu molestie augue felis ut erat. Etiam nisi arcu, efficitur at ligula eu, imperdiet lobortis justo. Donec in diam at neque sagittis tempor nec mattis arcu. Nam commodo tellus a dolor dictum aliquet. Vivamus cursus, enim sit amet molestie hendrerit, libero ipsum ultrices ante, a vestibulum quam purus eget odio. Sed sed faucibus sapien, id tempor tellus.
                  </Row>
                  <Row className="text-white">
                    Nam quis volutpat tellus. Sed accumsan justo sit amet pulvinar molestie. Ut interdum massa quis lorem sagittis, nec lacinia lectus rhoncus. Aliquam porttitor convallis tincidunt. Maecenas congue mi sit amet mollis maximus. Donec eu scelerisque velit. Suspendisse in eros dignissim, pulvinar tortor feugiat, pretium leo. Proin sit amet varius ligula, at rhoncus neque. Sed varius orci lectus, vitae viverra nunc dignissim a.
                  </Row>
                  <Row className="text-white">
                    Aliquam aliquam faucibus turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec suscipit sagittis erat eget porttitor. Etiam id est at lacus fermentum consectetur. Vestibulum congue tellus in metus fermentum, sit amet bibendum risus efficitur. Maecenas vehicula sapien tortor, vel luctus justo hendrerit viverra. Suspendisse blandit est augue, et hendrerit lorem sodales at. Integer vel placerat ex. Maecenas semper mauris non tempor vulputate. Sed dapibus et tortor id interdum. Maecenas convallis velit eget mauris rhoncus, eget dapibus mauris interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique ut lacus in ullamcorper. Proin mauris augue, sagittis id finibus quis, tincidunt eu massa. Nam mattis diam at metus placerat consectetur. Quisque pretium bibendum nisl in semper.
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