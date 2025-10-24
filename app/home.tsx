import { useFonts } from 'expo-font';
import { ScrollView, Text, View } from "react-native";
import Header from '../components/Header/Header';
import NoTasks from "../components/NoTasks/NoTasks";
import TaskCard from '../components/TaskCard/TaskCard';
import { Colors, Fonts } from '../constants/themes.js';


export default function home() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf')
  }); 
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:Colors.primary_background,
      }}
    >
     <Header/>
     <Text style = {{
      padding:20,
      color:Colors.titles,
      fontSize:17, 
      fontFamily:Fonts.titles,
      }}>
        Tarefas Críticas
     </Text>
     <View style={{gap:20}}>
      <TaskCard icon = {"🥤"} text = {"Beber Agua"}/>
      <TaskCard icon = {"💪"} text = {"Tomar creatina"}/>
      <TaskCard icon = {"🐶"} text = {"Alimentar cachorro"}/>
      <TaskCard icon = {"😏"} text = {"Teste"}/>
    
     </View> 
     
     <Text style = {{
      padding:20,
      color:Colors.titles,
      fontSize:17, 
      fontFamily:Fonts.titles
      }}>
        Já foi
     </Text>
     <NoTasks/>
    </ScrollView>
  );
}

