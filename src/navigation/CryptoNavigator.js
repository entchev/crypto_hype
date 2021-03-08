import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import TrendingScreen from '../screens/TrendingScreen'
import SettingsScreen from '../screens/SettingsScreen'
import SearchScreen from '../screens/SearchScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import { Platform } from 'react-native'
import Colors from '../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import ProfileScreen from '../screens/ProfileScreen'
import DetailScreen from '../screens/DetailScreen'
import AboutScreen from '../screens/AboutScreen'

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'lato-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'lato-regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen',
}

const StackNavigator = createStackNavigator(
  {
    Main: TrendingScreen,
    Search: SearchScreen,
    Settings: SettingsScreen,
    Details: DetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
)

const SearchNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    Details: {
      screen: DetailScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
)

const SettingsNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
)

const tabScreenConfig = {
  Market: {
    screen: StackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesome name='exchange' size={24} color={tabInfo.tintColor} />
        )
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <FontAwesome name='search' size={24} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='settings' size={24} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
    },
  },
}

const CryptoNavigator = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: '#99141f',
    inactiveTintColor: '#14998e',
    labelStyle: {
      fontFamily: 'lato-bold',
    },
  },
})

const MainNavigator = createDrawerNavigator(
  {
    CryptoNav: {
      screen: CryptoNavigator,
      navigationOptions: {
        drawerLabel: 'Hype',
      },
    },
    Favorites: {
      screen: FavouritesScreen,
      navigationOptions: {
        drawerLabel: 'Favorites',
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        drawerLabel: 'Profile',
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        drawerLabel: 'About',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'lato-regular',
      },
    },
  }
)

export default createAppContainer(MainNavigator)
