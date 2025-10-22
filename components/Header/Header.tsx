import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView, Text, View } from "react-native";
import styles from "./Header.style";

 const Header = ()=> (
    <SafeAreaView style={styles.mainView} >
      <View style = { styles.texts}>
        <Text style = { styles.title}>
          Memori
        </Text>
        <Text style = { styles.desc}>
          Paz de espírito, sem  neura
        </Text>
      </View> 
      <Feather style= {styles.button} name="settings" size={18} color="black" />
    </SafeAreaView>
);

export default Header;