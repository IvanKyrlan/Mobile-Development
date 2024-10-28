import React, { useState } from 'react';
import { View, TextInput, Text, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateTransaction, removeTransaction } from '../redux/transactionsSlice';
import { globalStyles } from '../styles/globalStyles';
import RadioButton from '../components/RadioButton';
import Icon from 'react-native-vector-icons/AntDesign';

const EditTransactionScreen = ({ route, navigation }) => {
    const { transactionId } = route.params;
    const transaction = useSelector(state =>
        state.transactions.items.find(op => op.id === transactionId)
    );

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (transaction) {
            setName(transaction.name);
            setAmount(transaction.amount.toString());
            setType(transaction.type);
        }
    }, [transaction]);

    const handleSave = () => {
        if (!name.trim()) {
            Alert.alert('Validation Error', 'Transaction title is required.');
            return;
        }

        const numericAmount = parseFloat(amount);
        if (!numericAmount || numericAmount <= 0) {
            Alert.alert('Validation Error', 'Transaction amount is required.');
            return;
        }

        if (transaction) {
            dispatch(updateTransaction({
                id: transactionId,
                name,
                amount: numericAmount,
                type,
            }));
            navigation.goBack();
        }
    };

    const handleDelete = () => {
        if (transaction) {
            Alert.alert(
                "Delete Transaction",
                "Are you sure you want to delete this transaction?",
                [
                    { text: "Cancel", style: "cancel" },
                    {
                        text: "Delete",
                        onPress: () => {
                            dispatch(removeTransaction({ id: transactionId }));
                            navigation.goBack();
                        },
                        style: "destructive",
                    },
                ]
            );
        }
    };

    if (!transaction) {
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>Transaction not found.</Text>
            </View>
        );
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={globalStyles.backButton}>
                    <Icon name='arrowleft' color={'#e2e2e2'} size={22}></Icon>
                </TouchableOpacity>
                <Text style={globalStyles.headerTitle}>Edit Transaction</Text>
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
                placeholder="Transaction Name"
                onChangeText={setName}
            />

            <TextInput
                style={globalStyles.input}
                value={amount}
                placeholder="Amount"
                onChangeText={setAmount}
                keyboardType="numeric"
            />

            <TouchableOpacity style={[globalStyles.button, { marginTop: 20, backgroundColor: '#006600' }]} onPress={handleSave}>
                <Text style={globalStyles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[globalStyles.button, { marginTop: 20, backgroundColor: '#d31900' }]} onPress={handleDelete}>
                <Text style={globalStyles.buttonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditTransactionScreen;
