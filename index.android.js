import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  AppRegistry
} from 'react-native';
import Header from './src/components/header';
import JkpIcon from './src/components/jkpIcon';

const Styles = {
  panelChoices: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 90
  },
  txtResults: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
};

class App3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userChoice: '',
      choiceMachine: '',
      result: '',
    }
  }

  jokenpo(userChoice) {
    let num = Math.random();
    num = Math.floor(num * 3);

    const choiceMachine = [
      'pedra',
      'papel',
      'tesoura'
    ];

    let result;

    if (
      choiceMachine[num] === 'pedra' && userChoice === 'papel' ||
      choiceMachine[num] === 'papel' && userChoice === 'tesoura'||
      choiceMachine[num] === 'tesoura' && userChoice === 'pedra'
    ) {
      result = 'Você Ganhou!';
    } else if (
      choiceMachine[num] === 'papel' && userChoice === 'pedra' ||
      choiceMachine[num] === 'tesoura' && userChoice === 'papel'||
      choiceMachine[num] === 'pedra' && userChoice === 'tesoura'
    ) {
      result = 'Você Perdeu!';
    } else {
      result = 'Empatou!';
    }

    this.setState({ 
      userChoice,
      choiceMachine: choiceMachine[num],
      result
    });
  }

  render() {
    const { wrapper, header, panelChoices, btn, footer, txtResults } = Styles;
    return(
      <View style={ wrapper }>
        <Header style={ header } />
        <View style={ panelChoices }>
          <View style={ btn }>
            <Button onPress={ () => this.jokenpo('pedra') } title='Pedra'/>
          </View>
          <View style={ btn }>
            <Button onPress={ () => this.jokenpo('papel') } title='Papel'/>
          </View>
          <View style={ btn }>
            <Button onPress={ () => this.jokenpo('tesoura') } title='Tesoura'/>
          </View>
        </View>

        <View style={ footer }>
          <Text style={ txtResults }>{ this.state.result }</Text>
          <JkpIcon choice={ this.state.choiceMachine } player="O celular escolheu" />
          <JkpIcon choice={ this.state.userChoice } player="E você escolheu" />
        </View>        
      </View>
    );
  }
};

AppRegistry.registerComponent('app3', () => App3);
