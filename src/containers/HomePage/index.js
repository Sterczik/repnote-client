import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PageHeading from '../../components/PageHeading/PageHeading';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="RepNote"
          defaultTitle="RepNote"
        >
          <meta name="description" content="RepNote" />
        </Helmet>

        <div className="hero">
          <div className="hero__container">
            <div className="hero__text">
              <PageHeading
                title="RepNote"
                subtitle="A React app with REST backend"
              />
              <Link to="/login" className="hero__link">Login</Link>
              <Link to="/register" className="hero__link">Register</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
