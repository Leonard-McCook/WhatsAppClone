import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import bg from '../../assets/images/BG.png';

 const IndividualChatScreen = () => {
  return (
    <ImageBackground source={bg} style={StyleSheet.bg}>
      <Text>IndividualChatScreen</Text>
    </ImageBackground>
  )
}

export default IndividualChatScreen;