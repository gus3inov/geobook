import React, { Component } from 'react';
import {
  Input,
  Label,
  Item,
  Form,
  Button,
  Container,
  Text,
} from 'native-base';
import { MapView } from 'expo'
import Screen from '../../components/Screen';

class Login extends Component {
  state = {

  }

  render() {
    return (
      <Screen title="Home">
        <Container style={{ flex: 1 }}>
          {this.getMap()}
        </Container>
      </Screen>
    );
  }
}

export default Login;
