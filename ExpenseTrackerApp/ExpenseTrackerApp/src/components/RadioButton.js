import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButton = ({ options, selectedOption, onSelect }) => {
    return (
        <View style={styles.container}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    style={styles.radioButton}
                    onPress={() => onSelect(option.value)}
                >
                    <View style={styles.outerCircle}>
                        {selectedOption === option.value && <View style={styles.innerCircle} />}
                    </View>
                    <Text style={styles.label}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    outerCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    innerCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#e2e2e2',
    },
    label: {
        fontSize: 16,
        color: '#e2e2e2',
    },
});

export default RadioButton;
