import React, { useContext } from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { CRYPTOS } from '../../assets/tempData'
import CryptoTile from '../components/CryptoTile'

const TrendingScreen = () => {
  const renderItem = (itemData) => {
    return (
      <CryptoTile
        name={itemData.item.name}
        id={itemData.item.id}
        imageUrl={itemData.item.imageUrl}
        latest_price={itemData.item.latest_price}
        market_cap={itemData.item.market_cap}
        hype_index={itemData.item.hype_index}
        onSelect={() => {
          console.log('Crypto Selected!')
        }}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <Text>Trending Screen</Text>
      <Spacer />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CRYPTOS}
        renderItem={renderItem}
      />
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

export default TrendingScreen
