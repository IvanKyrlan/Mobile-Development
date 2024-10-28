import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import PieChart from 'react-native-pie-chart';
import { globalStyles } from '../styles/globalStyles';
import RadioButton from '../components/RadioButton';
import { selectAlltransactions } from '../redux/transactionsSlice';
import Icon from 'react-native-vector-icons/AntDesign';

const StatisticsScreen = ({ navigation }) => {
    const [selectedType, setSelectedType] = useState('expense');
    const [colors, setColors] = useState([]);
    const transactions = useSelector(selectAlltransactions);

    const filteredTransactions = transactions.filter(op => op.type === selectedType);
    const chartData = filteredTransactions.map(op => parseFloat(op.amount));
    const chartLabels = filteredTransactions.map(op => op.name);

    const isChartDataValid = chartData.length > 0 && chartData.some(value => value > 0);
    const screenWidth = Dimensions.get('window').width;
    const pieSize = screenWidth * 0.6;

    useEffect(() => {
        if (chartLabels.length > 0) {
            const generatedColors = chartLabels.map(() => getBrightColor());
            setColors(generatedColors);
        }
    }, [chartLabels.length]);

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={[globalStyles.transactionButton, { marginTop: 10, borderLeftColor: colors[index], borderLeftWidth: 10 }]}
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
    );

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={globalStyles.backButton}>
                    <Icon name='arrowleft' color={'#e2e2e2'} size={22}></Icon>
                </TouchableOpacity>
                <Text style={globalStyles.headerTitle}>Statistics</Text>
            </View>

            <RadioButton
                options={[
                    { label: 'Expense', value: 'expense' },
                    { label: 'Income', value: 'income' },
                ]}
                selectedOption={selectedType}
                onSelect={setSelectedType}
            />

            <View style={{ alignItems: 'center' }}>
                {isChartDataValid && colors.length === chartData.length ? (
                    <View>
                        <PieChart
                            widthAndHeight={pieSize}
                            series={chartData}
                            sliceColor={colors}
                            doughnut={true}
                            coverRadius={0.5}
                        />
                    </View>
                ) : (
                    <Text style={globalStyles.emptyMessage}>No data available to display</Text>
                )}
            </View>

            <FlatList
                data={filteredTransactions}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                style={{ marginTop: 20 }}
            />
        </View>
    );
};

const getBrightColor = () => {
    const getRandomValue = () => Math.floor(Math.random() * 80) + 128;
    const red = getRandomValue();
    const green = getRandomValue();
    const blue = getRandomValue();
    return `rgb(${red}, ${green}, ${blue})`;
};

export default StatisticsScreen;
