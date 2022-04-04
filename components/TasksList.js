import { FlatList, StyleSheet, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import TasksItem from './TasksItem';
import { getTasks, deleteTask } from '../api';
import { useIsFocused } from '@react-navigation/native';

const TasksList = () => {
    const [tasks, setTasks] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const isFocused = useIsFocused();

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    }

    useEffect(() => {
        loadTasks();
    }, [isFocused]);

    const handleDelete = async (id) => {
        await deleteTask(id);
        await loadTasks();
    }

    const renderItem = ({ item }) => {
        return <TasksItem task={item} handleDelete={handleDelete} />;
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    })

    return (
        <FlatList
            style={styles.list}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        />
    )
}

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
});

export default TasksList