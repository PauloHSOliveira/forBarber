import React, { useMemo } from 'react';
import { TouchableOpacity, DatePickerAndroid, Text } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

export default function ButtonDate({ date, onChange }) {
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }
  return (
    <TouchableOpacity style={Styles.dateButton} onPress={handleOpenPicker}>
      <Text style={Styles.date}>{dateFormatted}</Text>
      <Icon name="calendar-range-outline" size={20} color="#878787" />
    </TouchableOpacity>
  );
}
