import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const TasksItem = ({ task, handleDelete }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Tasks', { id: task.id })}>
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemTitle}>{task.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    padding: 7,
                    backgroundColor: '#ee5253',
                    borderRadius: 5
                }}
                onPress={() => handleDelete(task.id)}
            >
                <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#EFEFEF',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        color: "#070707"
    }
});

export default TasksItem