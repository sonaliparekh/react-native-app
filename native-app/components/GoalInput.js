import React, { useState } from "react";
import { TextInput, Button, StyleSheet, View, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setenteredGoal] = useState("");

  const addInputGoal = text => {
    setenteredGoal(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setenteredGoal('');
  } 
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={addInputGoal}
          value={enteredGoal}
        />
        <View style={styles.buttonsStyle}>
        <Button title='Cancel' color='red'  onPress={props.onCancel}/>
        <Button title="Add" onPress={addGoalHandler} />
        </View>
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  inputContainer: {
      flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsStyle: {
      flexDirection: 'row-reverse',
      justifyContent:"space-around",
      alignItems: 'center'
  }
});
export default GoalInput;
