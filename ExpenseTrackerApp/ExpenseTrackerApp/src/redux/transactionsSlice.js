import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addTransaction: (state, action) => {
            state.items.push(action.payload);
        },
        removeTransaction: (state, action) => {
            state.items = state.items.filter(op => op.id !== action.payload.id);
        },

        updateTransaction: (state, action) => {
            const { id, name, amount, type } = action.payload;
            const existingTransaction = state.items.find(op => op.id === id);
            if (existingTransaction) {
                existingTransaction.name = name;
                existingTransaction.amount = amount;
                existingTransaction.type = type;
            }
        },
    },
});

export const { addTransaction, removeTransaction, updateTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;

export const selectAlltransactions = (state) => state.transactions.items;

export const selectTotalExpenses = createSelector(
    [selectAlltransactions],
    (transactions) => transactions
        .filter(op => op.type === 'expense')
        .reduce((total, expense) => total + parseFloat(expense.amount), 0)
);

export const selectTotalIncome = createSelector(
    [selectAlltransactions],
    (transactions) => transactions
        .filter(op => op.type === 'income')
        .reduce((total, income) => total + parseFloat(income.amount), 0)
);

export const selectBalance = createSelector(
    [selectTotalExpenses, selectTotalIncome],
    (totalExpenses, totalIncome) => totalIncome - totalExpenses
);