import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const TodoItem = ({item, onDeleteTodo}) => {


    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <AntDesign name='delete' size={24} color='#000' onPress={() => onDeleteTodo(item.key)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: '#ddd',
    }
})
