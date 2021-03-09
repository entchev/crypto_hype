import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const DetailScreen = (props) => {
  const cryptoId = props.navigation.getParam('cryptoId')
  const cryptos = useSelector((state) => state.cryptoList.cryptos)

  return (
    <View style={styles.content}>
      <Text style={{ fontSize: 38 }}>{cryptos[cryptoId - 1].hype_index}</Text>
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
