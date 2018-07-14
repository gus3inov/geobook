import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Text, Content, Tab, Tabs } from 'native-base';
import { reduxForm, Field } from 'redux-form';
import { moduleName, signIn } from '../../ducks/auth'
import Login from '../Login';
import Signup from '../Signup';
import styles from './styles';

class Authorization extends Component {
  handleLogin = (values) => {
    this.props.signIn(values);
  }

  render() {

    return (
      <Container>
           <Header tabStyle={styles.tabsHeader} hasTabs />
           <Tabs tabStyle={styles.tabsHeader}>
          <Tab heading="Войти">
            <Login onSubmit={this.handleLogin} />
          </Tab>
          <Tab heading="Создать аккаунт">
            <Signup />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default connect(state => {
  return {
      isAuth: state[moduleName].isAuth,
      loading: state[moduleName].loading
  };
}, { signIn })(Authorization);
