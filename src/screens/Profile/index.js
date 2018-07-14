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
import { connect } from 'react-redux';
import { MapView } from 'expo'
import { moduleName } from '../../ducks/auth'
import AuthService from '../../services/AuthService'
import Screen from '../../components/Screen';

class Profile extends Component {
  state = {
 
  }

  logout = () => {
      AuthService.deauthenticateUser()
  }

  componentDidMount () {
  
  }

  render() {
    return (
      <Screen navigation={this.props.navigaiton} title="Profile" auth={true}>
        <Container style={{ flex: 1 }}>
          <Button onPress={this.logout}>
            <Text>
              { 'Выйти' }
            </Text>
        </Button>
        </Container>
      </Screen>
    );
  }
}

export default connect((state, ownProps) => ({
  user: state[moduleName].user,
  navigation: ownProps.navigation,
}), {})(Profile);
