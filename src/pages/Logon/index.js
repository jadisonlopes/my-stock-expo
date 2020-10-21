import React, { useState, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from './styles';
import api from '../../services/api';
import { DefaultButton } from '../../components';

export default function Logon({ go }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showInputPass, setShowInputPass] = useState(false);
  const inputPassword = useRef(null);

  async function userExist(name) {
    try {
      const { data } = await api.get(`/usuario/${name}`);
      return !!data;
    } catch (error) {
      return false;
    }
  }

  async function permittedUser(value) {
    try {
      const { data } = await api.get(`/usuario/permitido/${value}`);
      return !!data;
    } catch (error) {
      return false;
    }
  }

  function validPassword(value) {
    return value === process.env.PASS_APP;
  }

  async function validUser() {
    if (user.length < 1) return;
    if (!(await userExist(user))) {
      Alert.alert('Usuário não existe!');
    } else if (!(await permittedUser(user))) {
      Alert.alert('Usuário não permitido!');
    } else {
      setShowInputPass(true);
      inputPassword.current.focus();
    }
  }

  async function pressBegin() {
    if (!validPassword(password)) {
      Alert.alert('Senha inválida!');
    } else go('Home', { user });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.contentInfo}>
          <Text style={styles.textH1}>Olá!</Text>
          <Text style={styles.text}>Favor informar seu nome de usuário.</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="characters"
            value={user}
            onFocus={() => {
              setShowInputPass(false);
            }}
            onChangeText={(text) => {
              setUser(text);
            }}
            onBlur={validUser}
          />
          {showInputPass && (
            <TextInput
              ref={inputPassword}
              style={styles.textInput}
              secureTextEntry
              maxLength={14}
              placeholder="Senha"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          )}
        </View>
        <DefaultButton press={pressBegin} title="Começar" />
      </View>
    </TouchableWithoutFeedback>
  );
}
