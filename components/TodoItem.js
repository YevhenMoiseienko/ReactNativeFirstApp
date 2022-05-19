import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const TodoItem = ({item, onDeleteTodo}) => {


    return (
        <TouchableOpacity onPress={() => onDeleteTodo(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: '#ddd',
    }
})
