/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

export default function calcimc() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcImc = () => {
    if (peso == 0 || !peso) {
      alert('Informe o Peso!');
    }
    if (altura == 0 || !altura) {
      alert('Informe o Altura!');
    }
    const r = peso / Math.pow(altura, 2);
    setResultado(r.toFixed(1));
  };

  return (
    <ScrollView>
      <SafeAreaView style={estilos.corpo}>
        <View style={(estilos.bloco, {alignItems: 'center', marginBottom: 10})}>
          <Text style={{fontSize: 16}}>CALCULADORA DE IMC</Text>
        </View>
        <View style={estilos.bloco}>
          <Text>Informe seu Peso:</Text>
          <TextInput
            style={estilos.txt}
            autoFocus={true}
            keyboardType={'numeric'}
            onChangeText={text => setPeso(text)}
          />
        </View>
        <View style={estilos.bloco}>
          <Text>Informe sua Altura:</Text>
          <TextInput
            style={estilos.txt}
            autoFocus={false}
            keyboardType={'numeric'}
            onChangeText={text => setAltura(text)}
          />
        </View>
        <View style={estilos.bloco}>
          <TouchableOpacity style={estilos.btnCalc} onPress={() => calcImc()}>
            <Text style={estilos.txtBtn}>Calcular IMC</Text>
          </TouchableOpacity>
        </View>
        <View style={(estilos.bloco, {alignItems: 'center', marginBottom: 15})}>
          <Text
            style={{
              fontSize: 18,
              backgroundColor: '#fff',
              borderWidth: 1,
              padding: 3,
              borderRadius: 10,
            }}>
            RESULTADO: {resultado}
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri:
                'https://www.ideiasmix.com/wp-content/uploads/2016/02/tabela-imc.jpg',
            }}
            style={{height: 250, width: '100%'}}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    padding: 20,
    backgroundColor: '#DCF9EA',
  },
  bloco: {
    marginBottom: 20,
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  btnCalc: {
    //backgroundColor: '#048',
    backgroundColor: '#1F344F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
});
