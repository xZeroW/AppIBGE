import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { View, Image, Text, TextInput, FlatList } from 'react-native';

import { config } from '../../services/api';
import Card from '../../components/Card';

import styles from './styles';
import logo from '../../assets/logo.png';

export default function Home(){

  const [nome, setNome] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => 
      Axios.get(`${config.API_URL}/${nome}`)
        .then(res => {
          setData(res.data[0].res);
        })
        .catch(function () {
        // handle error
        });
    fetchData();
  }, [nome]);

  console.log(data);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={{ height: 50, width: 50 }} />
      </View>
      <View style={styles.body}>
          <Text style={styles.title}>Home</Text>
          <TextInput value={nome} onChange={e => setNome(e.target.value)} placeholder='Nome'></TextInput>
      </View>
      <View>
        {data !== undefined &&
          <FlatList
          data={data}
          renderItem={({ item }) => <Card periodo={item.periodo} frequencia={item.frequencia} />}
          keyExtractor={item => item.periodo}
        />
        }
      </View>
    </View>
  );
}