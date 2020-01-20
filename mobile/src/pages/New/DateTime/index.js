import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../../services/api';
import Styles from './styles';

import ButtonDate from '../../../components/ButtonDate';

export default function Provider({ navigation }) {
  const [loadingDate, setLoadingDate] = useState(true);
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const id = navigation.getParam('id');
  console.log(id);
  useEffect(() => {
    async function loadAvailable() {
      setLoadingDate(true);
      const response = await api.get(`providers/${id}/available`, {
        params: {
          date: date.getTime(),
        },
      });
      setHours(response.data);
      setLoadingDate(false);
    }

    loadAvailable();
  }, [date, id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      id,
      time,
    });
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.areaButtons}>
        <ButtonDate date={date} onChange={setDate} />
        {loadingDate ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={hours}
            keyExtractor={item => item.time}
            numColumns={2}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  item.available ? { opacity: 1 } : { opacity: 0.1 },
                  Styles.hour,
                ]}
                onPress={() => handleSelectHour(item.value)}
              >
                <Text>{item.time}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

Provider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione dia e hora',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-double-left" size={20} color="#0085FF" />
    </TouchableOpacity>
  ),
});
