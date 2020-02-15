import * as React from 'react';
import { ColorLab } from '../components/color-lab';
import { Reset } from '../components/global-styles';

const Home = (): React.ReactNode => (
  <React.Fragment>
    <Reset />
    <ColorLab />
  </React.Fragment>
);

export default Home;
