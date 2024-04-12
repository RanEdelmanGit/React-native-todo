import React, { useState } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <AddTask setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  logo: {
    width: 165,
    height: 45,
    position: 'absolute',
    top: 80,
    marginBottom: 50,
  },
});
