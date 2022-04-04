import React from 'react';

import TasksList from "../components/TasksList";
import Layout from '../components/Layout';

const HomeScreen = () => {
    return (
        <Layout>
            <TasksList />
        </Layout>
    );
}

export default HomeScreen 