import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Text, Content, Tab, Tabs } from "native-base";
import { reduxForm, Field } from "redux-form";
import { moduleName, signIn } from "../../ducks/auth";
import Login from "../Login";
import Signup from "../Signup";
import styles from "./styles";

class Authorization extends Component {
  handleLogin = values => {
    if (values.username && values.password) {
      this.props.signIn(values, this.props.navigation);
    }
  };

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

export default connect(
  (state, ownProps) => {
    return {
      isAuth: state[moduleName].isAuth,
      error: state[moduleName].error,
      loading: state[moduleName].loading,
      navigation: ownProps.navigation
    };
  },
  { signIn }
)(Authorization);
