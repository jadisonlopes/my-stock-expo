import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function DefaultButton({ press, title }) {
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={press}>
        <Text style={styles.textBtn}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
