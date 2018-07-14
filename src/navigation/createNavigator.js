import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Authorization from '../screens/Authorization'
import Profile from '../screens/Profile'

const createNavigator = (initialScreen) => {
  const navigationConfig = {
    headerMode: 'none',
    initialRouteName: initialScreen
  }
  const screens = {
    HomeScreen: { screen: Home },
    AuthorizationScreen: { screen: Authorization },
    ProfileScreen: { screen: Profile },
  }

  return StackNavigator(screens, navigationConfig)
}

export default createNavigator
