import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../../services/api';
import Styles from './styles';

import ButtonDate from '../../../components/ButtonDate';

export default function Provider({ navigation }) {
  const [loadingDate, setLoadingDate] = useState(true);
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');
  useEffect(() => {
    async function loadAvailable() {
      setLoadingDate(true);
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });
      setHours(response.data);
      setLoadingDate(false);
    }

    loadAvailable();
  }, [date, provider]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
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
              <RectButton
                style={[
                  item.available ? { opacity: 1 } : { opacity: 0.1 },
                  Styles.hour,
                ]}
                enabled={item.available}
                onPress={() => handleSelectHour(item.value)}
              >
                <Text style={Styles.texthour}>{item.time}</Text>
              </RectButton>
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
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#0085FF" />
    </TouchableOpacity>
  ),
});
