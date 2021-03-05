import React, { useState } from 'react'
import { LogBox } from 'react-native'
import * as Font from 'expo-font'
import { enableScreens } from 'react-native-screens'
import AppLoading from 'expo-app-loading'
import CryptoNavigator from './src/navigation/CryptoNavigator'

enableScreens()

LogBox.ignoreAllLogs(true) // ignores annoying yellow error messages

const fetchFonts = () => {
  return Font.loadAsync({
    'lato-light': require('./assets/fonts/Lato/Lato-Light.ttf'),
    'lato-regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }
  return <CryptoNavigator />
}
