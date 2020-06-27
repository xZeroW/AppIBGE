import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { View, Image, Text, TextInput, FlatList, Button } from 'react-native';

import { config } from '../../services/api';
import Card from '../../components/Card';

import styles from './styles';
import logo from '../../assets/logo.png';

export default function Home(){

  const [nome, setNome] = useState('');
  const [data, setData] = useState();

  const fetchData = () => 
    Axios.get(`${config.API_URL}/${nome}`)
      .then(res => {
        setData(res.data[0].res.sort(function(a, b) {
          return b.frequencia - a.frequencia;
      }));
      })
      .catch(function () {
      // handle error
      });

  useEffect(() => {
    fetchData();
  }, [nome]);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={{ height: 50, width: 50 }} />
        <Text style={styles.title}>IBGE</Text>
      </View>
      <View style={styles.body}>
          <TextInput style={styles.Input} value={nome} onChangeText={(nome) => setNome(nome)} placeholder='Primeiro nome'></TextInput>
          <Button
            title="Pesquisar"
            onPress={() => fetchData()}
            accessibilityLabel="Pesquisar"
          />
      </View>
      <View>
        {data !== undefined &&
          <FlatList
          data={data}
          style={styles.NameList}
          keyExtractor={item => item.periodo}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card periodo={item.periodo} frequencia={item.frequencia} />
          )}
        />
        }
      </View>
    </View>
  );
}