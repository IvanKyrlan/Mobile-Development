import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import TabNavigator from './TabNavigator';

const Navigation = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121212',
    },

    navigationContainer: {
        flex: 1,
    },
});

export default Navigation;
