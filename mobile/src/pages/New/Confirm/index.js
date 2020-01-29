import React, { useMemo } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';
import api from '../../../services/api';

export default function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');
  const dateFormated = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAppointment() {
    const response = await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Apoitments');
  }

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <View style={{ alignItems: 'center' }}>
        <Image style={Styles.avatar} source={{ uri: provider.avatar.url }} />
        <Text style={Styles.name}>{provider.name}</Text>

        <Text style={Styles.time}>
          {`Agendar horário para ${dateFormated}`}
        </Text>
        <TouchableOpacity style={Styles.button} onPress={handleAppointment}>
          <Text style={Styles.textbtn}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirme seu agendamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#0085FF" />
    </TouchableOpacity>
  ),
});
