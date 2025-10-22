import { Text, View } from "react-native";
import styles from "./TaskCard.style";


const TaskCard = ({icon,text}:{icon:string,text:string})=> (
    <View style = {styles.cardView}>
        <Text style = {styles.emoji}>
            {icon}
        </Text>
        <Text style= {styles.taskName}>
            {text}
        </Text>
    </View>
)

export default TaskCard;