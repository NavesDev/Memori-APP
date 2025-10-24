import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants/themes';

export default StyleSheet.create({
    mainView:{
        paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 20,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingRight:20
    },
    texts: {
        flexDirection: "column",
        gap:7,
        flex:1
    },
    title: {
        color:Colors.header_title,
        fontSize:24,
        fontFamily:Fonts.headers,
        lineHeight : 24,
        padding:0
    },
    desc:{
        fontSize:14,
        fontFamily:Fonts.texts,
        color:Colors.header_subtitle,
        padding:0
    },
    button:{
        color:Colors.header_button
    }
});