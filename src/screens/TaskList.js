import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import styles from '../styles/styles';

const TaskList = ({ route, navigation }) => {
  const [task, setTask] = useState(route.params); 

  useEffect(() => {
    if (route.params?.task) {
      setTask(route.params.task);
    }
    if (route.params?.updateTask) {
      setTask(route.params.updateTask);
    }if (route.params?.wasDeleted) {
        setTask(null);
        navigation.setParams({ wasDeleted: null }); 
    }
  }, [route.params?.task, route.params?.updateTask,route.params?.wasDeleted]); 

  return (
    <ScrollView style={styles.container}>
      {task ? (
        <>
        <Card style={styles.card}>
          <Card.Title
  title={task.name}
  subtitle={'Topic: ' + task.topic}
  titleStyle={{ fontSize: 27, fontWeight: "bold" }}   
  subtitleStyle={{ fontSize: 17, fontWeight: "bold" }}             
/>

          <Card.Content>
            <Text>{'Description: ' + task.description}</Text>
          </Card.Content>
          <Card.Content>
            <Text>{ ' • ' +task.stateTask}</Text>
          </Card.Content>
          <Card.Actions>
            
            <Button
              onPress={() => navigation.navigate('TaskEdits', { task: task })}
            >Edit Task
            </Button>
            <Button
              onPress={() => navigation.navigate('TaskDelete', { task: task })}
            >Delete Task
            </Button>

          </Card.Actions>
        </Card>
        <Button
              mode = 'outlined'
              onPress={() => navigation.navigate('CreateTask', { task } )}
            >Create Task
            </Button>
        </>
        
      ) : (
        <>
            <Text style={styles.title}>No task to show, yet...</Text>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('CreateTask')}
                style={{ margin: 22 }}
            >
                Create a new Task
            </Button>
        </>
      )}
    </ScrollView>
  );
};

export default TaskList;