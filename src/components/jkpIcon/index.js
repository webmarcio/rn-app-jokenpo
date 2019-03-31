import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const Styles = {
  icon: {
    alignItems: 'center',
    marginBottom: 20,
  },
  player: {
    fontSize: 18
  }
}

const imgPedra = require('../../../imgs/pedra.png');
const imgPapel = require('../../../imgs/papel.png');
const imgTesoura = require('../../../imgs/tesoura.png');

class JkpIcon extends Component {
  render() {
    const { player, icon } = Styles;

    if (this.props.choice === 'pedra') {
      return(
        <View style={ icon }>
          <Text style={ player }>{ this.props.player }</Text>
          <Image source={ imgPedra }/>
        </View>
      );
    } else if (this.props.choice === 'papel') {
      return(
        <View style={ icon }>
          <Text style={ player }>{ this.props.player }</Text>
          <Image source={ imgPapel }/>
        </View>
      );
    } else if (this.props.choice === 'tesoura') {
      return(
        <View style={ icon }>
          <Text style={ player }>{ this.props.player }</Text>
          <Image source={ imgTesoura }/>
        </View>
      );
    }
    
    return false;
  };
}

export default JkpIcon;
