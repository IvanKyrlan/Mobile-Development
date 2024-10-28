import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#121212',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },

    backButton: {
        position: 'absolute',
        left: 20,
        zIndex: 1,
    },

    headerTitle: {
        fontSize: 20,
        letterSpacing: 1,
        color: '#e2e2e2',
        textAlign: 'center',
        flex: 1,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#e2e2e2',
        textAlign: 'center',
    },

    input: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        color: '#e2e2e2',
    },

    button: {
        backgroundColor: '#006600',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    transactionButton: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#202020',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },

    transactionButtonText: {
        color: '#e2e2e2',
        fontSize: 18,
    },

    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        backgroundColor: '#006600',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        width: 70,
        height: 70,
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#e2e2e2',
        fontSize: 16,
    },

    transactionText: {
        fontSize: 18,
        color: '#e2e2e2',
        paddingBottom: 15,
    },

    errorText: {
        fontSize: 18,
        color: '#d31900',
        textAlign: 'center',
    },

    balanceContainer: {
        padding: 20,
        backgroundColor: '#202020',
        borderRadius: 10,
    },

    balanceLabel: {
        fontSize: 14,
        color: '#707070',
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: 10,
    },

    balanceValue: {
        fontSize: 24,
        color: '#f5f5f5',
        textAlign: 'center',
    },

    floatContainer: {
        justifyContent: 'space-between',
        marginVertical: 20,
        flexDirection: 'row',
    },

    floatBox: {
        borderRadius: 10,
        backgroundColor: '#202020',
        padding: 15,
    },

    floatLabel: {
        fontSize: 12,
        color: '#707070',
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: 10,
    },

    floatValue: {
        fontSize: 20,
        color: '#f5f5f5',
        textAlign: 'center',
    },

    floatIcon: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20,
    },

    operationAmount: {
        fontSize: 16,
        color: '#333',
    },

    emptyMessage: {
        textAlign: 'center',
        fontSize: 18,
        color: '#999',
        marginTop: 20,
    },

    statisticsTransactions: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#202020',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',

    },
});
