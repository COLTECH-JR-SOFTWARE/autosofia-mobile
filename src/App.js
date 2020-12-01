import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';


import { store, persistor } from './store';

import Routes from './Routes/index';
import Route from './route';

export default function App() {

  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Route/>  
      </PersistGate>
    </Provider>

  );
}
