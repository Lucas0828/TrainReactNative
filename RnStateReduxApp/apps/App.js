import React from 'react';
// import {View, Text} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CounterListContainer from './containers/CounterListContainer';
import reducers from './reducers';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <CounterListContainer />
    </Provider>
  );
}

export default App;
