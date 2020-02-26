import * as React from 'react';
import { ColorLab } from '../components/color-lab';
import { Lessons } from '../components/lessons';
import { Reset } from '../components/global-styles';

const Home = (): React.ReactNode => (
  <React.Fragment>
    <Reset />
    <ColorLab />
    <Lessons />
  </React.Fragment>
);

export default Home;
