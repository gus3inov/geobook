import React from "react";
import { Provider } from "react-redux";
import { Container, Text } from "native-base";
import Expo, { Font, Notifications } from "expo";
import AuthService from "./services/AuthService";
import config from "../config/app";

// import RegisterForPushNotificationsAsyncService from "./services/RegisterForPushNotificationsAsyncService";
import store from "./store";
import createNavigator from "./navigation/createNavigator";

class Root extends React.PureComponent {
  navigation = {
    auth: createNavigator("AuthorizationScreen"),
    home: createNavigator("HomeScreen")
  };

  state = {
    fontLoaded: false,
    navigator: this.navigation.auth,
    notification: {}
  };

  async register(userId) {
    try {
      const { status } = await Expo.Permissions.askAsync(
        Expo.Permissions.NOTIFICATIONS
      );

      if (status !== "granted") {
        alert("You need to enable permissions in settings");
        return;
      }

      const token = await Expo.Notifications.getExpoPushTokenAsync();
      await fetch(`${config.api}/api/save-push-token`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pushToken: token,
          userId: userId
        })
      }).catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnMount() {
    this.listener && Expo.Notifications.removeListener(this.listen);
  }

  listen = ({ origin, data }) => {
    alert("ПРивет Мир");
  };

  async componentDidMount() {
    try {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      })

    if(await AuthService.isAuth()) {
      this.setState({
        navigator: this.navigation.home
      });
      if (await AuthService.isAuth()) {
        let user = JSON.parse(await AuthService.getUser());
        await this.register(user.result[0].id);
        this.listener = Expo.Notifications.addListener(this.listen);
        this.setState({
          navigator: this.navigation.home
        });
      }
    }
      this.setState({ fontLoaded: true });
    } catch (e) {
      console.log(e);
    }
  }

  loader = () => {
    return (
      <Container
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Загрузка...</Text>
      </Container>
    );
  };

  render() {
    const Navigator = this.state.navigator;
    return (
      <Provider store={store}>
        <Container style={{ flex: 1 }}>
          {this.state.fontLoaded && (
            <Container>
              <Navigator />
            </Container>
          )}
        </Container>
      </Provider>
    );
  }
}

export default Root;
