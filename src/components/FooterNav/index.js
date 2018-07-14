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

  render() {
    const { navigation } = this.props

    return (
        <Footer>
          <FooterTab style={styles.container}>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button onPress={() => navigation.navigate('ProfileScreen')}>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default FooterNav;
