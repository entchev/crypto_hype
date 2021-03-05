import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import TrendingScreen from '../screens/TrendingScreen'
import SettingsScreen from '../screens/SettingsScreen'
import SearchScreen from '../screens/SearchScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import { Platform } from 'react-native'
import Colors from '../../constants/Colors'
import { NavigationContainer } from '@react-navigation/native'

const CryptoNavigator = createBottomTabNavigator({
  Market: TrendingScreen,
  Search: SearchScreen,
  Settings: SettingsScreen,
})

export default createAppContainer(CryptoNavigator)
