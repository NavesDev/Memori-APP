import Feather from '@expo/vector-icons/Feather';
import { Link } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Header.style";

 const Header = ()=> {
  
  
  return (
      <SafeAreaView style={styles.mainView} >
        <View style = { styles.texts}>
          <Text style = { styles.title}>
            Memori
          </Text>
          <Text style = { styles.desc}>
            Paz de espírito, sem  neura
          </Text>
        </View> 
        <Link href={'/settings'} asChild>
          <TouchableOpacity>
            <Feather style= {styles.button} name="settings" size={18} color="black" />
          </TouchableOpacity>
        </Link>
        
      
      </SafeAreaView>
  );
}
export default Header;