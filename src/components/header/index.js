import React, { Component } from 'react';
import { View, Image } from 'react-native';

const backgroundImage = require('../../../imgs/jokenpo.png');

class Header extends Component {
  render() {
    return(
    <View>
      <Image source={ backgroundImage }/>
    </View>
    );
  }
}

export default Header;
