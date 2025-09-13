import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert, Image } from 'react-native';
import { Card, Avatar, TextInput, Button } from 'react-native-paper';
import styles from '../styles/styles';

const TaskEdits = ({route, navigation}) => {
    const{task}=route.params;
    
    const [name, setName] = useState(task.name);
    const [topic, setTopic] = useState(task.topic);
    const [description, setDescription] = useState(task.description);
    const [stateTask, setStateTask] = useState(task.stateTask);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = name.trim() !== '' &&
                        topic.trim() !== '' &&
                        description.trim() !== ''&&
                        stateTask.trim() !== '';
        setIsFormValid(isValid);
    }, [name, topic, description, stateTask]);

    const handleSave = () => {
        const updateTask ={
            ...task,
            name,
            topic,
            description,
            stateTask
        }
        if (!isFormValid) {
            Alert.alert(
                'Error',
                'Make sure to fill all the fields',
                [{text: 'OK'}]
            );
            return;
        }

        navigation.navigate('TaskList', {updateTask: updateTask});

        Alert.alert(
            'Task',
            'Successfully saved changes',
            [{text: 'OK'}]
        );  
    }

    return (
        <ScrollView style={styles.container}>
        <Card style={styles.card}>
            <Card.Title title="Edit the fields of this Task" />
            <Card.Content>
            <TextInput
                label="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                label="Topic"
                value={topic}
                onChangeText={setTopic}
                style={styles.input}
            />
            <TextInput
                label="Description"
                value={description}
                onChangeText={setDescription}
                multiline
                style={styles.input}
            />
            <TextInput
                label="Status"
                value={stateTask}
                onChangeText={setStateTask}
                multiline
                style={styles.input}
            />

            <Button
                mode="contained"
                onPress={handleSave}
                style={styles.button}
            >
                Save your Changes
            </Button>
            </Card.Content>
        </Card>
        </ScrollView>
    );    
};


export default TaskEdits;