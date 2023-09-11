import { createContext, useReducer } from "react";
import { transactionsInitialState, transactionsReducer } from "../reducers/transactions";

export const TransactionsContext = createContext({});

interface Props {
    children: JSX.Element[]
}

export function TransactionsProvider({ children }: Props) {
    const [state, dispatch] = useReducer(transactionsReducer, transactionsInitialState);

    return (
        <TransactionsContext.Provider value={{}}>
            {children}
        </TransactionsContext.Provider>
    );
}
