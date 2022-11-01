import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import IndividualChatScreen from './src/screens/IndividualChatScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <IndividualChatScreen />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});
