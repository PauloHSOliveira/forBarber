import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Styles from './styles';

export default function List({ data }) {
  console.log(data);
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View
        style={[data.past ? { opacity: 0.1 } : { opacity: 1 }, Styles.list]}
      >
        <Image
          style={Styles.avatar}
          source={{
            uri: 'https://api.adorable.io/avatars/200/abott@adorable.png',
          }}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={Styles.name}>Paulo Oliveira</Text>
          <Text style={Styles.date}>{dateParsed}</Text>
        </View>
      </View>
    </View>
  );
}
