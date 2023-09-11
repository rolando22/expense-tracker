import { createContext, useReducer } from "react";
import { transactionsInitialState, transactionsReducer } from "../reducers/transactions";
import type { Transaction, TransactionWithId } from "../types/transaction";

interface ContextProps {
    transactions: TransactionWithId[]
    total: number 
    incomes: number 
    expense: number
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

    const [total, incomes, expense] = state
        .reduce((accumulador, transaction) => {
            accumulador[0] += transaction.amount;
            transaction.amount > 0 ? accumulador[1] += transaction.amount : accumulador[2] += transaction.amount;
            return accumulador;
        }, [0, 0, 0])

    return (
        <TransactionsContext.Provider value={{
            transactions: state,
            total, 
            incomes, 
            expense,
            addTransaction,
            removeTransaction, 
        }}>
            {children}
        </TransactionsContext.Provider>
    );
}
