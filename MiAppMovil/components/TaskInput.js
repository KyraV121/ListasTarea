// components/TaskInput.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = (inputText) => {
    setEnteredTask(inputText);
  };

  const addTaskHandler = () => {
    if (enteredTask.trim()) {
      onAddTask(enteredTask);
      setEnteredTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Nueva tarea"
        style={styles.input}
        onChangeText={taskInputHandler}
        value={enteredTask}
      />
      <Button title="Agregar" onPress={addTaskHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '75%',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 5,
  },
});

export default TaskInput;
