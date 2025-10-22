import { StyleSheet } from 'react-native';
import { Fonts } from "../../constants/themes";
export default StyleSheet.create({
    mainView:{
        flexDirection:"column",
        justifyContent:'center',
        alignItems:"center",
        padding:30
    },
    emoji:{
        fontSize:40,
        marginBottom:10
    },
    text:{
        fontSize:16,
        fontFamily:Fonts.texts
    }
})