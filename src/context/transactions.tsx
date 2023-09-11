import { createContext, useReducer } from "react";
import { transactionsInitialState, transactionsReducer } from "../reducers/transactions";
import type { Transaction, TransactionWithId } from "../types/transaction";

interface ContextProps {
    transactions: TransactionWithId[]
    addTransaction: (transaction: Transaction) => void
    removeTransaction: ({ id }: { id: string }) => void
}

export const TransactionsContext = createContext<ContextProps>({} as ContextProps);

interface Props {
    children: JSX.Element[]
}

export function TransactionsProvider({ children }: Props) {
    const [state, dispatch] = useReducer(transactionsReducer, transactionsInitialState);

    const addTransaction = (transaction: Transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    const removeTransaction = ({ id }: { id: string }) => dispatch({ type: 'REMOVE_TRANSACTION', payload: id });

    return (
        <TransactionsContext.Provider value={{
            transactions: state,
            addTransaction,
            removeTransaction, 
        }}>
            {children}
        </TransactionsContext.Provider>
    );
}
