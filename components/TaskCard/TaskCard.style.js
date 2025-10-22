import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    cardView:{
        borderWidth:2,
        borderColor:"rgba(0, 0, 0, 0.23)",
        marginLeft :20,
        marginRight:20,
        padding:15,
        borderRadius:20,
        flexDirection:"row",
        gap:20,
        alignItems:"center",
        boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.23)"
    },
    emoji:{
        fontSize:35
    },
    taskName:{
        fontSize:18,
        fontFamily:"Poppins",
        paddingTop:5
    }
})