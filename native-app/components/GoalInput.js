import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setenteredGoal] = useState('');

    const addInputGoal = (text) => {
        setenteredGoal(text);
    }
    return <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"
            style={styles.inputText}
            onChangeText={addInputGoal}
            value={enteredGoal} />
        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
}

const styles = StyleSheet.create({
    inputText: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%"
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
export default GoalInput;