import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
// import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../screens/Home'
import stackNav from './stackNavigation'
import Profile from '../screens/Profile/index.js'

const Tab = createBottomTabNavigator (
  {
    Home: {
      screen: Home
    },
    Profile: {
      screen: Profile
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName

        if (routeName === 'Home') {
          iconName = `home`
        } else if (routeName === 'Profile') {
          iconName = `user`
        }

        // return <Icon name={ iconName } size={ 25 } color={ tintColor } />
      }
    }),
    tabBarIconOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
)

export default Tab