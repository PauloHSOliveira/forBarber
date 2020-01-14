import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

export default function Dashboard() {
    return (
        <View style={{ flex: 1 }}>
            <Header title="Menu" />
        </View>
    );
}

Dashboard.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home-outline" size={30} color={tintColor} />
    ),
};
