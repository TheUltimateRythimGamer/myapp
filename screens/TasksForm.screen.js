import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { saveTask, getTask } from '../api';

const TaskFormScreen = ({ navigation, route }) => {
    const [tasks, setTasks] = useState({
        id: 0,
        title: '',
        description: ''
    });

    const handleChange = (name, value) => setTasks({ ...tasks, [name]: value });

    const handleSumbit = () => {
        saveTask(tasks)
        navigation.navigate('Home')
    }

    useEffect(
        () => {
            if (route.params && route.params.id) {
                navigation.setOptions({ headerTitle: 'Updating a task' });
                (async () => {
                    const task = await getTask(route.params.id);
                    console.log(task);
                    setTasks({
                        id: task.id,
                        title: task.title,
                        description: task.description
                    })
                })();
            }
        }, []
    );

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Write a Title"
                placeholderTextColor='#ffffff'
                onChangeText={(text) => handleChange('title', text)}
                value={tasks.title}
            />
            <TextInput
                style={styles.input}
                placeholder="Write a Description"
                placeholderTextColor='#ffffff'
                onChangeText={(text) => handleChange('description', text)}
                value={tasks.description}
            />
            {
                route.params && route.params.id ? (
                    <TouchableOpacity
                        style={styles.buttonUpdate}
                        onPress={handleSumbit}
                    >
                        <Text style={styles.buttonText}>Update Task</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.buttonSave}
                        onPress={handleSumbit}
                    >
                        <Text style={styles.buttonText}>Save Task</Text>
                    </TouchableOpacity>
                )
            }

        </Layout>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '90%',
        fontSize: 14,
        marginBottom: 10,
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        padding: 4,
        borderRadius: 5
    },
    buttonSave: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: 'white',
        width: '90%',
    },
    buttonUpdate: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: 'white',
        width: '90%',
    },
    buttonText: {
        color: 'black',
        textAlign: 'center'
    }
})

export default TaskFormScreen