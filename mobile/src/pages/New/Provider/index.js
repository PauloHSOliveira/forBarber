import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../../services/api';
import Styles from './styles';

export default function Provider({ navigation }) {
  const [provider, setProvider] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = navigation.getParam('id');
  useEffect(() => {
    async function loadProvider() {
      const response = await api.get(`providers/${id}`);

      setProvider(response.data);
      setLoading(false);
    }
    loadProvider();
  }, []);

  function handleAppoint() {
    navigation.navigate('DateTime', { id });
  }

  return (
    <SafeAreaView style={Styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View style={Styles.header}>
            <View style={Styles.areaName}>
              <Image
                style={Styles.avatar}
                source={{ uri: provider.avatar.url }}
              />
              <Text style={Styles.title}>{provider.name}</Text>
            </View>
          </View>

          <TouchableOpacity style={Styles.btn} onPress={handleAppoint}>
            <Text style={Styles.textbtn}>Agendar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

Provider.navigationOptions = ({ navigation }) => ({
  title: 'Prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-double-left" size={20} color="#0085FF" />
    </TouchableOpacity>
  ),
});
