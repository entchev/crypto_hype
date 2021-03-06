import React from 'react'
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native'

const CryptoTile = (props) => {
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title}>{props.id} | </Text>
          <Image style={styles.image} source={{ uri: props.logoUrl }} />
          <Text style={styles.title}> {props.name} | </Text>
          <Text style={styles.title}>£{props.latest_price} | </Text>
          <Text style={styles.title}>£{props.market_cap} | </Text>
          <Text style={styles.title}>{props.hype_index}</Text>
        </View>
      </TouchableCmp>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 56,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    paddingTop: 20,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  title: {
    fontFamily: 'lato-regular',
    fontSize: 16,
  },
  image: {
    height: 19,
    width: 19,
  },
})

export default CryptoTile
