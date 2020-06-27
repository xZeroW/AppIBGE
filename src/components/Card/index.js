import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Card({ periodo, frequencia }){

  var re = new RegExp(/^[^[]/);
  periodo = periodo.replace(/\[$/,"]");
  re.test(periodo) ? periodo = '[' + periodo : periodo

  return(
    <View style={styles.Container}>
      <Text style={styles.NameValue}>Período: {periodo}</Text>
      <Text style={styles.NameValue}>Frequência: {frequencia}</Text>
    </View>
  );
}