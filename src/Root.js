import React from 'react'
import { Provider } from 'react-redux'
import { Container, Text } from 'native-base'
import { Font } from 'expo'
import AuthService from './services/AuthService';
import store from './store'
import createNavigator from './navigation/createNavigator'

class Root extends React.PureComponent {
  navigation = {
    auth: createNavigator('AuthorizationScreen'),
    home: createNavigator('HomeScreen'),
  }

  state = {
    fontLoaded: false,
    navigator: this.navigation.auth
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    console.log('isAuth', await AuthService.isAuth())
    if(await AuthService.isAuth()) {
      this.setState({
        navigator: this.navigation.home
      });
    }
    this.setState({fontLoaded: true});
  }

  loader = () => {
    return (
      <Container style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Загрузка...</Text>
      </Container>
    )
  }

  render() {
    const Navigator = this.state.navigator
    return (
      <Provider store={store}>
        <Container style={{flex: 1}}>
        {
          this.state.fontLoaded &&
            <Container>
              <Navigator />
            </Container>
        }
        </Container>
      </Provider>
    )
  }
}

export default Root
