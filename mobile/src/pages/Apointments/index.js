import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import Appointment from '../../components/Appointment';

export default function Apointments() {
    return (
        <View style={{ flex: 1 }}>
            <Header title="Agendamentos" />
            <Appointment />
        </View>
    );
}

Apointments.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="file-document-box-outline" size={30} color={tintColor} />
    ),
};
