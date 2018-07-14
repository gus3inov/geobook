import { AsyncStorage } from 'react-native';

class AuthService {
    static authenticateUser(token, user) {
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('user', JSON.stringify(user));
    }

    static async isAuth() {
        const res = await this.getToken();
        console.log('token', res !== null)
        return res !== null;
    }

    static async getToken() {
        return await AsyncStorage.getItem('token');
    }

    static async getUser() {
        return await AsyncStorage.getItem('user');
    }

    static deauthenticateUser() {
        AsyncStorage.setItem('token', '');
        AsyncStorage.setItem('user', '');
    }
}

export default AuthService;
