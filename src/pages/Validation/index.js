import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';

import styles from './styles';
import api from '../../services/api';
import { DefaultButton } from '../../components';

export default function Validation({ go, response }) {
  const { product, user } = response;
  const [contagem, setContagem] = useState('');

  function validQuantity(value) {
    return value.length > 0;
  }

  async function registerCount() {
    const { codigo, saldo } = product;
    try {
      const { data } = await api.post('/balanco', {
        produto: codigo,
        saldoatu: saldo,
        usuario: user,
        contagem,
      });
      return !!data;
    } catch (error) {
      return false;
    }
  }

  async function pressConfirm() {
    if (validQuantity(contagem)) {
      if (await registerCount()) go('Home');
      else Alert.alert('Não foi possível enviar contagem.');
    } else {
      Alert.alert('Informe o valor contado!');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnClose}
          onPress={() => {
            go('Home');
          }}
        >
          <Text style={styles.textClose}>X</Text>
        </TouchableOpacity>
        {product && (
          <View style={styles.contentInfo}>
            <Text style={styles.textCode}>{product.codigo}</Text>
            <Text style={styles.textDescription}>{product.nome}</Text>
            <View style={styles.contentInfoChild}>
              <Text style={styles.textLocation}>{product.localiz}</Text>
              <Text style={styles.textUnd}>{product.und}</Text>
            </View>
            <View style={styles.contentQuantity}>
              <Text style={styles.textQuantity}>
                {Number(product.saldo).toFixed(0)}
              </Text>
            </View>
          </View>
        )}

        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          placeholder="Contagem"
          maxLength={5}
          onChangeText={(text) => {
            if (text.length === 0) {
              Keyboard.dismiss();
            }
            setContagem(text);
          }}
          value={contagem}
        />
        <DefaultButton press={pressConfirm} title="Salvar" />
      </View>
    </TouchableWithoutFeedback>
  );
}
