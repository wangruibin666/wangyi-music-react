import React, { memo } from 'react';
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';
import routes from './router/index';
import  { HashRouter }  from 'react-router-dom';
import store from "./store";

import WangAppHeader from '@/components/app-header';
import WangAppFooter from '@/components/app-footer';

export default memo(function App () {
  return (
      <Provider store={store}>
        <HashRouter>
          <WangAppHeader/>
          {renderRoutes(routes)}
          <WangAppFooter/>
        </HashRouter>
      </Provider>

  )
})
