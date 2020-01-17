import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import api from '../../services/api';
import Styles from './styles';

function ProvidersList({ navigation }) {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers').then(res => {
        setProviders(res.data);
        setLoading(false);
      });
    }
    loadProviders();
  }, []);

  function handleSelect(id) {
    navigation.navigate('Provider', { id });
  }

  return (
    <View style={Styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={providers}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={Styles.list}
              onPress={() => handleSelect(item.id)}
            >
              <Image style={Styles.avatar} source={{ uri: item.avatar.url }} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

export default withNavigation(ProvidersList);
