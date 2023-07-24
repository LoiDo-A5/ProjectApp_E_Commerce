import React from 'react';
import {Provider} from 'react-redux';
import store from './App/Redux/store';
import AppWithNavigationState from './Navigations';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
      <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
};

export default App;
