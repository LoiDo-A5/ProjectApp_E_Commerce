import React from 'react';
import {Provider} from 'react-redux';
import AppWithNavigationState from './Navigations';
import Toast from 'react-native-toast-message';
import {persistor, store} from './App/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWithNavigationState />
      </PersistGate>
      <Toast />
    </Provider>
  );
};

export default App;
