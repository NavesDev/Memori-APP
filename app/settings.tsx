import { Platform, SafeAreaView, StatusBar } from "react-native";
import Header from "../components/SettingsHeader/SettingsHeader";
export default function settings(){
    return (
        <SafeAreaView style = {{flex:1, paddingTop:(Platform.OS === 'android' ? StatusBar.currentHeight : 0) }}>
            <Header/>
        </SafeAreaView>
    )
}