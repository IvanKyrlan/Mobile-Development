import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import StackNavigator from './StackNavigator';
import StatisticsScreen from '../screens/StatisticsScreen';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: styles.tabBar,
                    tabBarActiveTintColor: '#e2e2e2',
                    tabBarInactiveTintColor: '#707070',
                    tabBarLabelStyle: styles.tabLabel,
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Dashboard') {
                            iconName = focused ? 'bars' : 'bars';
                        } else if (route.name === 'Statistics') {
                            iconName = focused ? 'piechart' : 'piechart';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="Dashboard" component={StackNavigator} />
                <Tab.Screen name="Statistics" component={StatisticsScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121212',
    },
    tabBar: {
        backgroundColor: '#121212',
        borderTopWidth: 0,
        height: 60,
        paddingBottom: 5,
    },
    tabLabel: {
        fontSize: 12,
        paddingBottom: 2,
        color: '#e2e2e2',
    },
});

export default TabNavigator;
