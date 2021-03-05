import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'

const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    fontSize: 28,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SettingsScreen
