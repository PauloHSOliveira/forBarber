import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import api from '../../services/api';

import Styles from './styles';

export default function Appointment() {
    const [appoitments, setAppointments] = useState([]);

    useEffect(() => {
        async function loadAppoitments() {
            const response = await api.get('appointments');

            setAppointments(response.data);
        }

        loadAppoitments();
    }, []);

    return (
        <View style={Styles.container}>
            <FlatList
                data={appoitments}
                keyExtractor={(item, index) => index.toString(item._id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={Styles.list}>
                        <Text>{item.provider.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}
