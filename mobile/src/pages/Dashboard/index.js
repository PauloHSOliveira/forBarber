import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import ProvidersList from '../../components/ProvidersList';
import Styles from './styles';

export default function Dashboard() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Menu" />
      <View style={Styles.list}>
        <ProvidersList style={Styles.list} />
      </View>
    </SafeAreaView>
  );
}

Dashboard.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={30} color={tintColor} />
  ),
};
