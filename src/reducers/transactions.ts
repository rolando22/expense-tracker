import type { TransactionsState, TransactionsTypeAction } from "../types/transaction";

export const transactionsInitialState: TransactionsState = [];

const transactionsReducerObject = (state: TransactionsState, action: TransactionsTypeAction) => ({
    ['ADD_TRANSACTION']: state,
    ['REMOVE_TRANSACTION']: state,
});

export const transactionsReducer = (state: TransactionsState, action: TransactionsTypeAction) => {
    return transactionsReducerObject(state, action)[action.type] || state;
};
