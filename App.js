import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from "react-native-paper";

import CreateTask from './src/screens/CreateTask.js';
import TaskList from './src/screens/TaskList.js';
import TaskEdits from './src/screens/TaskEdits.js';
import TaskDelete from './src/screens/TaskDelete.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskList">
          
          <Stack.Screen
            name="TaskList"
            component={TaskList}
            options={{ title: 'List of Tasks'}}
          />
          <Stack.Screen
            name="CreateTask"
            component={CreateTask}
            options={{ title: 'Create Task'}}
          />
          <Stack.Screen
            name="TaskEdits"
            component={TaskEdits}
            options={{ title: 'Edit Task'}}
          />
          <Stack.Screen
            name="TaskDelete"
            component={TaskDelete}
            options={{ title: 'Task Delete'}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}