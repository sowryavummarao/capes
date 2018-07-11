import React from 'react';
import { Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SearchForm from './components/SearchForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='search' component={SearchForm} initial />
        <Scene
          key='courses'
          title='Courses'
          component={
            <Text>
              Here is a list of possible courses
            </Text>
          }
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
