import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import Appointment from '../../components/Appointment';

import api from '../../services/api';

function Apointments({ isFocused }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadAppoitments() {
    const response = await api.get('appointments').then(res => {
      setAppointments(res.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    if (isFocused) {
      loadAppoitments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`).then(res => {
      setAppointments(
        appointments.map(appointment =>
          appointment.id === id
            ? {
                ...appointment,
                canceled_at: res.data.canceled_at,
              }
            : appointment
        )
      );
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Agendamentos" />
      {loading ? (
        <ActivityIndicator size="large" color="#0085FF" />
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      )}
    </View>
  );
}

Apointments.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="file-document-box-outline" size={30} color={tintColor} />
  ),
};

export default withNavigationFocus(Apointments);
