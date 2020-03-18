import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isaddMode, setisaddMode] = useState(false);



  const addGoal = goalTitle => {
    setCourseGoals(courseGoals => [...courseGoals,
    { id: Math.random().toString(), value: goalTitle }]);
    setisaddMode(false);
  }


  const removeAGoal = goalId => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancelModeHandler = () => {
    setisaddMode(false);
  }

  return (
    <View style={styles.screen}>
    <Button title='Add new Goal'  onPress={()  => setisaddMode(true)}/>
      <GoalInput visible={isaddMode} onAddGoal={addGoal} onCancel={cancelModeHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem 
          id = {itemData.item.id}
          onDelete={removeAGoal} 
          title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
