import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Apoitments from './pages/Apointments';

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
                        Apoitments,
                        Dashboard,
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
                                alignSelf: 'center',
                                width: 300,
                                borderRadius: 50,
                                elevation: 5,
                                marginBottom: 10,
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
