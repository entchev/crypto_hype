import React from 'react'
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
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const TrendingScreen = () => {
  const renderItem = (itemData) => {
    return (
      <CryptoTile
        name={itemData.item.name}
        id={itemData.item.id}
        logoUrl={itemData.item.logoUrl}
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
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CRYPTOS}
        renderItem={renderItem}
      />
    </View>
  )
}

TrendingScreen.navigationOptions = () => {
  return {
    headerTitle: 'Trending Cryptos',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerList: {
    flexDirection: 'row',
  },
  headerItem: {
    justifyContent: 'flex-start',
  },
})

export default TrendingScreen
