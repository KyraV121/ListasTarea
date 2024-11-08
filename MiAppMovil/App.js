// App.js
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { key: Math.random().toString(), value: task },
    ]);
  };

  const deleteTask = (taskKey) => {
    setTasks((currentTasks) => currentTasks.filter(task => task.key !== taskKey));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff00', // Cambiado a amarillo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
