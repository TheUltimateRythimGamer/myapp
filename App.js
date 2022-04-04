import React from "react";
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home.screen";
import TaskFormScreen from "./screens/TasksForm.screen";

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        title: 'Tasks App',
                        headerStyle: {
                            backgroundColor: '#FF4760',

                        },
                        headerTitleStyle: {
                            color: '#070707'
                        },
                        headerRight: () => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
                                    <Text
                                        style={
                                            { color: '#070707', marginRight: 20, fontSize: 15 }
                                        }
                                    >
                                        New
                                    </Text>
                                </TouchableOpacity>
                            );
                        }
                    })
                    } />
                <Stack.Screen
                    name="Tasks"
                    component={TaskFormScreen}
                    options={{
                        title: 'Create a Task',
                        headerStyle: {
                            backgroundColor: '#FF4760',

                        },
                        headerTitleStyle: {
                            color: '#070707'
                        },
                        headerTintColor: '#070707'
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;