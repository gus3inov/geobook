import React, { Component } from "react";
import { Input, Label, Item, Form, Button, Container, Text } from "native-base";
import { connect } from "react-redux";
import { MapView } from "expo";
import { moduleName } from "../../ducks/auth";
import AuthService from "../../services/AuthService";
import Screen from "../../components/Screen";
import Cabinet from "../../components/Cabinet";

class Profile extends Component {
  state = {};

  logout = () => {
    AuthService.deauthenticateUser();
    this.props.navigation.navigate("AuthorizationScreen");
  };

  componentDidMount() {}

  render() {
    const { user, navigation } = this.props;
    return (
      <Screen navigation={this.props.navigation} title="Profile" auth={true}>
        <Cabinet navigation={navigation} user={user} />
      </Screen>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    user: state[moduleName].user,
    navigation: ownProps.navigation
  }),
  {}
)(Profile);
