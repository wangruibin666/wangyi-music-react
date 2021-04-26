import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './router/index';
import  { HashRouter }  from 'react-router-dom';

import WangAppHeader from '@/components/app-header';
import WangAppFooter from '@/components/app-footer';

export default memo(function App () {
  return (
      <HashRouter>
        <WangAppHeader/>
        {renderRoutes(routes)}
        <WangAppFooter/>
      </HashRouter>
  )
})
