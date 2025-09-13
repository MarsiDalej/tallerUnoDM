wimport React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import styles from '../styles/styles'; 

const TaskDelete = ({ route, navigation }) => {
    const { task } = route.params;

    const handleDelete = () => {
        navigation.navigate('TaskList', { wasDeleted: true });
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title 
                    title="Delete Task" 
                    subtitle="Are you sure about this? This cannot be undone" 
                />
                <Card.Content>
                    <Text style={localStyles.label}>Delete Task:</Text>
                    <Text style={localStyles.taskName}>{task.name}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => navigation.goBack()}>
                        Cancel
                    </Button>
                    <Button 
                        mode="contained" 
                        onPress={handleDelete}
                    >
                        Yes, Delete
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const localStyles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    taskTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default TaskDelete;