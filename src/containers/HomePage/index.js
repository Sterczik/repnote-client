import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero/Hero';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="RepNote - Create your trainings"
          defaultTitle="RepNote - Create your trainings"
        >
          <meta name="description" content="RepNote - Create your trainings" />
        </Helmet>

        <Hero />
      </div>
    );
  }
}

export default HomePage;
