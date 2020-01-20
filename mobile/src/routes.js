import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './pages/Login';
import Register from './pages/Register';
import Notifications from './pages/Notifications';
import Apoitments from './pages/Apointments';
import Dashboard from './pages/Dashboard';

import Provider from './pages/New/Provider';
import DateTime from './pages/New/DateTime';
import Confirm from './pages/New/Confirm';

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
            Apoitments,
            Notifications,
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
        New: {
          screen: createStackNavigator(
            {
              Provider,
              DateTime,
              Confirm,
            },
            {
              defaultNavigationOptions: {
                headerTransparent: true,
                headerTintColor: '#0085FF',
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
              },
            }
          ),
          navigationOptions: {
            tabBarVisible: false,
            tabBarLabel: 'Agendar',
          },
        },
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
