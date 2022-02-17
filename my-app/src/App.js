import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return <React.StrictMode>
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  </React.StrictMode>
}

export default App;

