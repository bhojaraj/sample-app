import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState(''),
  [ goalList, setGoalList ] = useState([]);

  const goalInputHandler = text => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    setGoalList(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Goal" 
            style={styles.input} 
            onChangeText={goalInputHandler} 
            value={enteredGoal}
          />
          <Button title="ADD" onPress={addGoalHandler}/>
        </View>
        <FlatList 
          keyExtractor={(item, index) => item.id} 
          data={goalList} 
          renderItem={itemData => (
            <View style={styles.goalList}>
              <Text>{itemData.item.value}</Text>
            </View>
          )} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor:'#000', 
    borderWidth: 1, 
    padding: 10
  },
  goalList: {
    padding: 10,
    borderColor: '#000000',
    backgroundColor: '#CCCCCC',
    borderWidth: 1,
    marginVertical: 10
  }

});
