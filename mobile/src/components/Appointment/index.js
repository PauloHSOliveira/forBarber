import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Styles from './styles';

export default function Appointment({ data, onCancel }) {
    const dateParsed = useMemo(() => {
        return formatRelative(parseISO(data.date), new Date(), {
            locale: pt,
            addSuffix: true,
        });
    }, [data.date]);
    return (
        <View style={Styles.container}>
            <View
                style={[data.past ? Styles.Past : Styles.noPast, Styles.list]}
            >
                <View style={Styles.itemRow}>
                    <Image
                        source={{
                            uri: data.provider.avatar
                                ? data.provider.avatar_url
                                : 'https://api.adorable.io/avatar/1/rocketseat.png',
                        }}
                        style={Styles.avatar}
                    />
                    <View style={Styles.info}>
                        <Text style={Styles.name}>{data.provider.name}</Text>
                        <Text style={Styles.hour}>{dateParsed}</Text>
                    </View>
                </View>

                {data.cancelable && !data.canceled_at && (
                    <TouchableOpacity style={Styles.cancel} onPress={onCancel}>
                        <Text style={Styles.textCancel}>Cancelar</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
