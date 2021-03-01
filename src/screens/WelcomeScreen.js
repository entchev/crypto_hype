import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button, Overlay } from 'react-native-elements'
import Spacer from '../components/Spacer'
import Icon from 'react-native-vector-icons/Entypo'

const WelcomeScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(true)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  const navigateToMain = () => {
    navigation.navigate('MainScreen')
  }

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.title}>Crypto Hype</Text>
      </Spacer>
      <Overlay isVisible={visible}>
        <View style={styles.overlayContainer}>
          <Text style={styles.welcomeText}>Hello! Welcome to Crypto Hype!</Text>
          <Button
            icon={<Icon name='flash' size={15} color='white' />}
            title='Click to Enter'
            onPress={navigateToMain}
          />
        </View>
      </Overlay>
    </View>
  )
}

WelcomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  title: {
    marginLeft: '35%',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    marginBottom: 400,
    flex: 1,
    justifyContent: 'center',
  },
  overlayContainer: {
    width: 300,
    height: 200,
    borderRadius: 0.3,
    borderColor: 'red',
    justifyContent: 'center',
  },
  welcomeText: {
    marginLeft: 17,
    fontSize: 22,
    marginBottom: 10,
  },
})

export default WelcomeScreen
