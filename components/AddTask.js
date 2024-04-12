import React, { useState } from "react";
import { TextInput, StyleSheet, Pressable, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddTask({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  const onPress = () => {
    if (newTask.trim() !== "") {
      const taskObj = {
        id: new Date().getTime().toString(), // Use timestamp as a simple ID
        text: newTask,
        completed: false,
      };
      setTasks([taskObj, ...tasks]);
      setNewTask("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add task"
        placeholderTextColor="#ffffff"
        style={styles.search}
        onChangeText={setNewTask}
        value={newTask}
      />
      <Pressable style={styles.button} onPress={onPress}>
        <Text><AntDesign name="pluscircleo" size={17} color="white" /></Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 160,
  },
  search: {
    backgroundColor: "rgb(38, 38, 38)",
    color: "#f2f2f2",
    width: "75%",
    height: 50,
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    margin: 5,
    backgroundColor: "rgb(30, 111, 159)",
    height: 50,
    width: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
