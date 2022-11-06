import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndividualChatScreen from '../screens/IndividualChatScreen';

const Navigator = () => {
  return (
    <NavigationContainer>
      <IndividualChatScreen />
    </NavigationContainer>
  );
};

export default Navigator;