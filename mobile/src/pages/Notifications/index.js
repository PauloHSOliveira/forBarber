import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

export default function Notifications() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Notificações" />
    </View>
  );
}

Notifications.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="bell-outline" size={30} color={tintColor} />
  ),
};
