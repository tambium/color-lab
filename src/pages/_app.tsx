import React from 'react';
import { Reset } from '../components/global-styles';
import { SEO } from '../components/seo';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Reset />
      <SEO />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
