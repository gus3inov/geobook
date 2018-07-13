import React, { Component } from 'react';
import {
  Input,
  Label,
  Item,
  Form,
  Button,
  Text,
} from 'native-base';
import Screen from '../../components/Screen';

class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Screen title="Home">
        <Text>
          { 'Home' }
        </Text>
      </Screen>
    );
  }
}

export default Home;
