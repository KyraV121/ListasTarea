// components/TaskList.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={onDeleteTask} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

export default TaskList;
