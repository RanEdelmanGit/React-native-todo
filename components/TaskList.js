import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Task from './Task';

export default function TaskList({ tasks, setTasks }) {
  const [openCount, setOpenCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);

  useEffect(() => {
    setOpenCount(tasks.filter(task => !task.completed).length);
    setClosedCount(tasks.filter(task => task.completed).length);
  }, [tasks]);

  const handleToggle = (id, completed) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.counters}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#8284fa", marginRight: 7 }}>Done</Text>
          <View style={styles.count}><Text style={{color:'white'}}>{closedCount}</Text></View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#4EA8DE", marginRight: 7 }}>Open</Text>
          <View style={styles.count}><Text style={{color:'white'}}>{openCount}</Text></View>
        </View>
      </View>
      <ScrollView style={styles.tasksContainer}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "black",
    position: "absolute",
    top: 260,
  },
  counters: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  count: {
    borderRadius: 15,
    backgroundColor: "#333333",
    width: 25,
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tasksContainer: {
    backgroundColor: "black",
    width: "90%",
    height: 500,
    borderRadius: 10,
  },
});
