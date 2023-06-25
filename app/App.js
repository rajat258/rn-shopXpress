import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {MainNavigator} from './navigation';
import {store} from './redux';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <MainNavigator />
    </Provider>
  );
}

export default App;
