// components/TaskItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(task.key)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{task.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskItem;
