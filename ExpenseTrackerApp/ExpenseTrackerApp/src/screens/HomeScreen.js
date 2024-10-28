import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { globalStyles } from '../styles/globalStyles';
import { selectBalance, selectTotalExpenses, selectTotalIncome } from '../redux/transactionsSlice';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => {
    const transactions = useSelector(state => state.transactions.items);
    const balance = useSelector(selectBalance);
    const totalExpenses = useSelector(selectTotalExpenses);
    const totalIncome = useSelector(selectTotalIncome);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Expense Tracker App</Text>

            <View style={globalStyles.balanceContainer}>
                <Text style={globalStyles.balanceLabel}>Total Balance</Text>
                <Text style={globalStyles.balanceValue}>${balance.toFixed(2)} </Text>
            </View>

            <View style={globalStyles.floatContainer}>
                <View style={globalStyles.floatBox}>
                    <View style={globalStyles.floatIcon} backgroundColor="rgba(0, 255, 0, 0.1)"><Icon name="arrowdown" color="green" size={18}></Icon></View>
                    <Text style={globalStyles.floatLabel}>Total Income</Text>
                    <Text style={globalStyles.floatValue}>${totalIncome.toFixed(2)}</Text>
                </View>
                <View style={globalStyles.floatBox}>
                    <View style={globalStyles.floatIcon} backgroundColor="rgba(255, 0, 0, 0.1)"><Icon name="arrowup" color="red" size={18}></Icon></View>
                    <Text style={globalStyles.floatLabel}>Total Expenses</Text>
                    <Text style={globalStyles.floatValue}>${totalExpenses.toFixed(2)}</Text>
                </View>
            </View>

            <Text style={globalStyles.transactionText}>Recent Transaction</Text>

            {transactions.length === 0 ? (
                <Text style={globalStyles.errorText}>There are no transactions</Text>
            ) : (
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[globalStyles.transactionButton, { marginBottom: 10 }]}
                            onPress={() => navigation.navigate('EditTransaction', { transactionId: item.id })}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={globalStyles.transactionButtonText}>
                                    {item.name}
                                </Text>
                                <Text style={{ color: item.type === 'expense' ? '#d31900' : 'green', fontSize: 16 }}>
                                    {item.type === 'expense' ? ` -$${item.amount.toFixed(1)}` : ` +$${item.amount.toFixed(1)}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}

            <TouchableOpacity
                style={[globalStyles.addButton,]}
                onPress={() => navigation.navigate('AddTransaction')}
            >
                <Icon name="plus" color="#e2e2e2" size={30}></Icon>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
