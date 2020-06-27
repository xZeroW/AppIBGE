import React from 'react';
import { View, Text } from 'react-native';

export default function Card({ periodo, frequencia }){

  var re = new RegExp(/^[^[]/);
  periodo = periodo.replace(/\[$/,"]");
  re.test(periodo) ? periodo = '[' + periodo : periodo

  return(
    <View>
      <Text>Periodo: {periodo}</Text>
      <Text>Frequencia: {frequencia}</Text>
    </View>
  );
}