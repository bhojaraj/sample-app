import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ courseGoals, setCourseGoals ] = useState([]),
  [ isAddMode, setIsAddMode ] = useState( false );

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode( false );
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(( goal ) => goal.id !== goalId );
    })
  };

  const cancelAdditionalGoalHandler = () => {
    setIsAddMode( false );
  };

  return (
    <View style={ styles.container }>
        <Button title="ADD NEW GOAL" onPress={() => setIsAddMode( true )} />
        <GoalInput onAddGoal={ addGoalHandler } onCancel={ cancelAdditionalGoalHandler } visible={ isAddMode } />
        <FlatList 
          keyExtractor={ (item, index) => item.id } 
          data={ courseGoals } 
          renderItem={ itemData => <GoalItem title={ itemData.item.value } id={ itemData.item.id } onDelete={ removeGoalHandler } /> } 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
