import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
import styles from './style';

class FooterNav extends Component {
  static propTypes = {};

  componentDidMount() {

  }

  isActive(route, screenName) {
     if(route === screenName){
      return true
     }

    return false
  }

  render() {
    const { navigation } = this.props
    return (
        <Footer>
          <FooterTab style={styles.container}>
            {/* <Button active={this.isActive(navigation.state.routeName)}>
              <Icon name="apps" />
            </Button>
            <Button active={this.isActive(navigation.state.routeName)}>
              <Icon name="camera" />
            </Button> */}
            <Button active={this.isActive(navigation.state.routeName, 'HomeScreen')} onPress={() => navigation.navigate('HomeScreen')}>
              <Icon active name="navigate" />
            </Button>
            <Button active={this.isActive(navigation.state.routeName, 'ProfileScreen')} onPress={() => navigation.navigate('ProfileScreen')}>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default FooterNav;
