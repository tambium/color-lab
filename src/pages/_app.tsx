import React from 'react';
import { Reset } from '../components/global-styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Reset />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
