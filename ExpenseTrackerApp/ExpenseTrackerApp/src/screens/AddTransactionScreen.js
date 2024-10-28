import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/transactionsSlice';
import { globalStyles } from '../styles/globalStyles';
import RadioButton from '../components/RadioButton';
import Icon from 'react-native-vector-icons/AntDesign';

const AddTransactionScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!name.trim()) {
            Alert.alert('Validation Error', 'Transaction title is required.');
            return;
        }

        const numericAmount = parseFloat(amount);
        if (!numericAmount || numericAmount <= 0) {
            Alert.alert('Validation Error', 'Amount must be a positive number.');
            return;
        }

        dispatch(addTransaction({
            id: Math.random().toString(),
            name,
            amount: numericAmount,
            type
        }));
        navigation.goBack();
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={globalStyles.backButton}>
                    <Icon name='arrowleft' color={'#e2e2e2'} size={22}></Icon>
                </TouchableOpacity>
                <Text style={globalStyles.headerTitle}>Add Transaction</Text>
            </View>

            <RadioButton
                options={[
                    { label: 'Expense', value: 'expense' },
                    { label: 'Income', value: 'income' },
                ]}
                selectedOption={type}
                onSelect={setType}
            />

            <TextInput
                style={globalStyles.input}
                value={name}
                placeholder="Title"
                placeholderTextColor="#666"
                onChangeText={setName}
            />

            <TextInput
                style={globalStyles.input}
                value={amount}
                placeholder="Amount"
                placeholderTextColor="#666"
                onChangeText={setAmount}
                keyboardType="numeric"
            />

            <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
                <Text style={globalStyles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View >
    );
};

export default AddTransactionScreen;
