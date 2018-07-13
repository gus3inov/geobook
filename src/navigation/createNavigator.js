import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'

const createNavigator = (initialScreen) => {
  const navigationConfig = {
    headerMode: 'none',
    initialRouteName: initialScreen
  }
  const screens = {
    HomeScreen: { screen: Home },
  }

  return StackNavigator(screens, navigationConfig)
}

export default createNavigator
