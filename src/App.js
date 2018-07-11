import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import SearchForm from './components/SearchForm.js';
//import Router from './Router';
/*TODO FOR THIS App
  Use manager as an example to wire up Redux to two text inputs
    Should add to actions index.js file and reducer file
    on text change (in searchform) should call the actions being imported, make sure to have
    mapstatetoprops

    create an action for login (this is where http request will happen), for now can skip and add BS

    use router to create scenes, everything is same flow
      search -> results (pick here) -> info in table
*/
class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <SearchForm />
      </Provider>
    );
  }
}

export default App;
