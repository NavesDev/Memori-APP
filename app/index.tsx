import { Text, View } from "react-native";
import { useFonts } from 'expo-font';

  

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf')
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#1F2228'
      }}
    >
      <Text style={{
        color:"white",
        fontFamily:"Poppins-Bold"
      }}>Aplicativo</Text>
    </View>
  );
}
