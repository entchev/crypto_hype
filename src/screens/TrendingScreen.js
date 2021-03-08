import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { CRYPTOS } from '../../assets/tempData'
import CryptoTile from '../components/CryptoTile'
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderListItems from '../components/HeaderListItems'

const TrendingScreen = (props) => {
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
          props.navigation.navigate({
            routeName: 'Details',
            params: {
              cryptoId: itemData.item.name,
            },
          })
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
        ListHeaderComponent={() => {
          return <HeaderListItems />
        }}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

TrendingScreen.navigationOptions = (navData) => {
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
    marginTop: 10,
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
