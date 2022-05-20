import {useState} from "react";
import {StyleSheet, View, TextInput, Button, Alert} from 'react-native';

export const AddTodos = ({onAddTodo}) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    const addTodo = (text) => {
        if (text.length < 2) {
            return (
                Alert.alert('Attention', 'Todo must have more then two symbols', [{text: 'Understood'}])
            )
        }
        onAddTodo(text);
        setText('');
    }

    return (
        <View>
            <TextInput
                value={text}
                style={styles.input}
                placeholder={'new todo...'}
                onChangeText={changeHandler}
            />
            <Button
                title='Add todo'
                color='coral'
                onPress={() => addTodo(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 6,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
    },
})