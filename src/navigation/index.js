import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndividualChatScreen from '../screens/IndividualChatScreen';
import ChatsScreen from '../screens/ChatsScreen';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name='Chats' component={ChatsScreen} />
         <Stack.Screen name='Chat' component={IndividualChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;