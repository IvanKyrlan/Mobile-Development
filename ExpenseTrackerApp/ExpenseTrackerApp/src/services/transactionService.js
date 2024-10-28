import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTransactions = createAsyncThunk('Transactions/fetchTransactions', async () => {
    const response = await axios.get('https://api.example.com/Transactions');
    return response.data;
});
