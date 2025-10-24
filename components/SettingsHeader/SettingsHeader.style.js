import { StyleSheet } from 'react-native';
import { Colors, Fonts } from "../../constants/themes";


export default StyleSheet.create({
    mainView:{
        flexDirection:'row',
        gap:20,
        padding:20,
        alignItems:"center",
        width:'100%'
    },
    title:{
        fontFamily:Fonts.headers,
        fontSize:24,
        color:Colors.header_title
    },
    desc:{
        fontSize:14,
        fontFamily:Fonts.texts,
        color:Colors.header_subtitle,
        padding:0
    },
    backButtonDad:{
        borderRadius:20,
        padding:10
    }
})