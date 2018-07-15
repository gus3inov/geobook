import { AsyncStorage } from "react-native";

class AuthService {
  static authenticateUser(user) {
    AsyncStorage.setItem("user", JSON.stringify(user));
  }

  static async isAuth() {
    const res = await this.getUser();
    console.log(res);
    return res;
  }

  static async getUser() {
    return await AsyncStorage.getItem("user");
  }

  static deauthenticateUser() {
    AsyncStorage.setItem("user", "");
  }
}

export default AuthService;
