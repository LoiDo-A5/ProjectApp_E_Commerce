import React from 'react';
import {Provider} from 'react-redux';
import store from './App/Redux/store';
import AppWithNavigationState from './Navigations';

const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
