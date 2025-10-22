import { useFonts } from 'expo-font';
import { Redirect } from 'expo-router';


export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf')
  });
  return <Redirect href="/home"/>
}
