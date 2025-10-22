import { Platform, StatusBar, StyleSheet } from 'react-native';
import { colors, fonts } from '../../constants/themes'; // Puxando as cores do nosso tema global

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
    },
    title: {
        color:colors.header_title,
        fontSize:24,
        fontFamily:fonts.headers,
        lineHeight : 24,
        padding:0
    },
    desc:{
        fontSize:14,
        fontFamily:fonts.texts,
        color:colors.header_subtitle,
        padding:0
    },
    button:{
        color:colors.header_button
    }
});