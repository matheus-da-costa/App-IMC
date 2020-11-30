import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Imc extends Component {
  constructor(props) {
    super(props);
    this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: '' };
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura);

    let s = this.state;
    s.resultado = imc;

    // < 16 - Magreza Grave
    // 16 a < 17 - Magreza Moderada
    // 17 a < 18,5 - Magreza Leve
    // 18,5 a < 25 - Saudável
    // 25 a < 30 - Sobrepeso
    // 30 a < 35 - Obesidade Grau 1
    // 35 a < 40 - Obesidade Grau 2 (Grave)
    // > 40- Obesidade Grau 3 (Mórbida, enterro em caixa d'água)

    if (s.resultado < 16) {
      s.resultadoText = 'Magreza Grave';
    } else if (s.resultado < 17) {
      s.resultadoText = 'Magreza Moderada';
    } else if (s.resultado < 18.5) {
      s.resultadoText = 'Magreza Leve';
    } else if (s.resultado < 25) {
      s.resultadoText = 'Saudável';
    } else if (s.resultado < 30) {
      s.resultadoText = 'Sobrepeso';
    } else if (s.resultado < 35) {
      s.resultadoText = 'Obesidade Grau 1';
    } else if (s.resultado < 40) {
      s.resultadoText = 'Obesidade Grau 2';
    }

    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
            
          <TextInput
            placeholder="Massa"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(massa) => {
              this.setState({ massa });
            }}
          />
          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(altura) => {
              this.setState({ altura });
            }}
          />
        </View>        
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 35 }]}>
          {this.state.resultadoText}
        </Text>
        <TouchableOpacity style={styles.buttom} onPress={this.calcular}>
          <Text style={styles.buttomText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    marginTop: 24,
    color: 'black',
  },
  buttom: {
    backgroundColor: '#57e1ee',
  },
  buttomText: {
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 65,
    padding: 15,
  },
});