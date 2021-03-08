import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const DetailScreen = (props) => {
  const cryptoName = props.navigation.getParam('cryptoId')

  return (
    <View style={styles.content}>
      <Text style={{ fontSize: 38 }}>{cryptoName}</Text>
    </View>
  )
}

DetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Detailed View',
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default DetailScreen
