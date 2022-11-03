import { Text, ImageBackground, StyleSheet, FlatList } from "react-native";
import Message from "../components/Message";
import messages from '../components/InputBox';

import bg from "../../assets/images/BG.png";
import messages from '../../assets/data/messages.json';

const IndividualChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList 
        data={messages} 
        renderItem={({ item }) => <Message message={item} />} 
        style={styles.list}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default IndividualChatScreen;