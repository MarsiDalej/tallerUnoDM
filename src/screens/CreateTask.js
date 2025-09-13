import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Card, Avatar, TextInput, Button } from 'react-native-paper';
import styles from '../styles/styles';

const CreateTask = ({navigation}) => {
    const [name, setName] = useState('');
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');
    const [stateTask, setStateTask] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const isValid = name.trim() !== '' &&
                        topic.trim() !== '' &&
                        description.trim() !== '' &&
                        stateTask.trim() !== '';
        setFormValid(isValid)
    },[name, topic, description,stateTask]);

    const handleSave = () => {
        if(!formValid) {
            Alert.alert('Error!','Make sure to fill all the fields',[{text: 'OK'}])
            return;
        }

        const taskCreate = { 
        name, 
        topic, 
        description, 
        stateTask
        };

        navigation.navigate('TaskList', {task: taskCreate})

    }

    return(
        <View>
            <ScrollView>
                <Card>
                    <Card.Content>
                        <TextInput
                            label = {'Name'}
                            value = {name}
                            onChangeText = {setName}
                            style = {styles.input}
                            
                        />
                        <TextInput
                            label = {'Topic'}
                            value = {topic}
                            onChangeText = {setTopic}
                            style = {styles.input}
                            
                        />


                        <TextInput
                            label = {'Description'}
                            value = {description}
                            onChangeText = {setDescription}
                            style = {styles.input}  
                            
                        />

                        <TextInput
                            label = {'Status'}
                            value = {stateTask}
                            onChangeText = {setStateTask}
                            style = {styles.input}  
                            
                        />

                        <Button
                            mode = 'contained'
                            onPress={handleSave}
                            style = {styles.button}
                        >Save Task NOW!
                        </Button>

                    </Card.Content>
                </Card>

            </ScrollView>
        </View>
    );
} 

export default CreateTask;
