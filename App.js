import React from 'react';
import {View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TodoList from './components/Todo';
import reducer from './components/Todo/reducers';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}


