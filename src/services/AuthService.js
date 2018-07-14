import { AsyncStorage } from 'react-native';

class AuthService {
    static authenticateUser(token) {
        AsyncStorage.setItem('token', token);
    }

    static async isAuth() {
        const res = await this.getToken();
        console.log('token', res !== null)
        return res !== null;
    }

    static async getToken() {
        return await AsyncStorage.getItem('token');
    }

    static deauthenticateUser() {
        return AsyncStorage.setItem('token', '');
    }

}

export default AuthService;
