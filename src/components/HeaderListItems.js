import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const HeaderListItems = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#</Text>
      <Text style={styles.text}>Name</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={styles.text}>Market Cap</Text>
      <Text style={styles.text}>Hype Index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor: '#8c92ac',
    borderRadius: 4,
  },
  text: {
    fontFamily: 'lato-bold',
  },
})

export default HeaderListItems
