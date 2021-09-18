import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = () => {
  return (
    <Grid>
      <Aside/>
      <MainHeader/>
      <Content/>
    </Grid>
  );
}

export default Layout;