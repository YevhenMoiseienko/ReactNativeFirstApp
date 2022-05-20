import React, {useState} from "react";
import {StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {Header} from "./components/Header";
import {TodoItem} from "./components/TodoItem";
import {AddTodos} from "./components/AddTodos";

export default function App() {

    const [todos, setTodos] = useState([
        {text: 'by coffee', key: 1},
        {text: 'create an app', key: 2},
        {text: 'play on the switch', key: 3},
    ]);

    const onDeleteTodo = (key) => {
        setTodos(todos.filter(todo => todo.key !== key))
    };

    const onAddTodo = (text) => {
        setTodos([{text, key: Date.now().toString()}, ...todos]);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    <AddTodos onAddTodo={onAddTodo} />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                                <TodoItem item={item} onDeleteTodo={onDeleteTodo}/>
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 40,
    },
    list: {
        flex: 1,
        marginTop: 20,
    }
});
