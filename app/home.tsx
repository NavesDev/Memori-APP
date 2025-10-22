import { useFonts } from 'expo-font';
import { SafeAreaView, Text } from "react-native";
import Header from '../components/Header/Header';
import { colors, fonts } from '../constants/themes.js';

export default function home() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf')
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:colors.primary_background,
      }}
    >
     <Header/>
     <Text style = {{
      padding:20,
      color:colors.titles,
      fontSize:17, 
      fontFamily:fonts.titles
      }}>
        Tarefa Crítica
     </Text>
    </SafeAreaView>
  );
}

