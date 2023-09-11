import type { Transaction, TransactionWithId, TransactionsState, TransactionsTypeAction } from "../types/transaction";

export const transactionsInitialState: TransactionsState = JSON.parse(localStorage.getItem('transactions_v1') ?? '[]') as TransactionsState

const transactionsReducerObject = (state: TransactionsState, action: TransactionsTypeAction) => ({
    ['ADD_TRANSACTION']: () => {
        const newTransaction: TransactionWithId = {
            id: crypto.randomUUID(),
            ...action.payload as Transaction
        };
        const newState = [...state, newTransaction];
        localStorage.setItem('transactions_v1', JSON.stringify(newState));
        return newState;
    },
    ['REMOVE_TRANSACTION']: () => {
        const newState = state.filter(transaction => transaction.id !== action.payload);
        localStorage.setItem('transactions_v1', JSON.stringify(newState));
        return newState;
    },
});

export const transactionsReducer = (state: TransactionsState, action: TransactionsTypeAction) => {
    return transactionsReducerObject(state, action)[action.type]() || state;
};
