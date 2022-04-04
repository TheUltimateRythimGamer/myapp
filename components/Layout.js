import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF5D73" />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF5D73',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },
});


export default Layout;