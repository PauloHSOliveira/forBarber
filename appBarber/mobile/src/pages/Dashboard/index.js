import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import List from '../../components/List';
import ButtonDate from '../../components/ButtonDate';

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [loadingDate, setLoadingDate] = useState(true);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      console.log(response.data);
      setSchedule(response.data.appointments);
    }
    loadSchedule();
  }, [date]);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Menu" />
      <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
        <ButtonDate date={date} onChange={setDate} />
      </View>
      <FlatList
        data={schedule}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <List data={item} />}
      />
    </View>
  );
}

Dashboard.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={30} color={tintColor} />
  ),
};
