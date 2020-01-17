import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Styles from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { signInRequest } from '../../store/modules/auth/actions';

export default function Login({ navigation }) {
  const dispach = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubtmit() {
    dispach(signInRequest(email, password));
  }

  function linkRegister() {
    navigation.navigate('Register');
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={Styles.container}>
      <View style={Styles.form}>
        <Input
          icon="email-outline"
          label="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
        />

        <Input
          icon="lock-outline"
          label="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          returnKeyType="send"
          OnSubmitEditing={handleSubtmit}
        />

        <Button loading={loading} children={'Entrar'} onPress={handleSubtmit} />

        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ color: '#878787' }}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={{ marginTop: 30 }} onPress={linkRegister}>
          <Text style={Styles.textRegister}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
