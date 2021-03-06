import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <Text> Search</Text>
    </View>
  )
}

SearchScreen.navigationOptions = () => {
  return {
    headerTitle: 'Search',
  }
}

const styles = StyleSheet.create({
  screen: {
    fontSize: 28,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SearchScreen
