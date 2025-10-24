import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './SettingsHeader.style';


const header = () => {
    const returnHome = () => {
        useRouter().back()
    }
    return (
    <View style={styles.mainView}>
        <TouchableOpacity style={styles.backButtonDad} onPress={returnHome}>
            <FontAwesome5 name="arrow-left" size={16} color="black" />
        </TouchableOpacity>
        <View>
            <Text style={styles.title}>
                Gerenciador de Tarefas
            </Text>
            <Text style={styles.desc}>
                Gerencie suas tarefas críticas
            </Text>
        </View>
    </View>
);
}
export default header