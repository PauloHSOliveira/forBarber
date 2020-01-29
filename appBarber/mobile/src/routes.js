import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
          Register,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              inactiveTintColor: '#0085FF',
              activeTintColor: '#000000',

              labelStyle: {
                display: 'none',
              },
              style: {
                elevation: 2,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
