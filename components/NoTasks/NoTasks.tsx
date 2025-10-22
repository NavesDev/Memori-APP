import { Text, View } from "react-native";
import styles from "./noTasks.style";

const NoTasks = ()=>(
    <View style={styles.mainView}>
        <Text style={styles.emoji}>
            🧘
        </Text>
        <Text style={styles.text}>Nenhuma tarefa realizada até o momento</Text>
        <Text style={styles.text}>Sua mente está tranquila</Text>
    </View>
);

export default NoTasks;