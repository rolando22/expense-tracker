import type { Transaction, TransactionWithId, TransactionsState, TransactionsTypeAction } from "../types/transaction";

export const transactionsInitialState: TransactionsState = [] as TransactionsState;

const transactionsReducerObject = (state: TransactionsState, action: TransactionsTypeAction) => ({
    ['ADD_TRANSACTION']: () => {
        const newTransaction: TransactionWithId = {
            id: crypto.randomUUID(),
            ...action.payload as Transaction
        };
        return [...state, newTransaction];
    },
    ['REMOVE_TRANSACTION']: () => {
        return state.filter(transaction => transaction.id !== action.payload);
    },
});

export const transactionsReducer = (state: TransactionsState, action: TransactionsTypeAction) => {
    return transactionsReducerObject(state, action)[action.type]() || state;
};
