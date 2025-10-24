import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    cardView:{
        borderWidth:0,
        borderColor:"rgba(0, 0, 0, 0.24)",
        marginLeft :20,
        marginRight:20,
        padding:15,
        borderRadius:20,
        flexDirection:"row",
        gap:20,
        alignItems:"center",
        boxShadow:"0px 0px 5px rgba(0, 0, 0, 0.46)"
    },
    emoji:{
        fontSize:40
    },
    taskName:{
        fontSize:18,
        fontFamily:"Poppins",
        paddingTop:7,
        flex:1
    }
})