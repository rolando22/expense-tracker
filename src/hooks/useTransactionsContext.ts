import { useContext } from "react";
import { TransactionsContext } from "../context/transactions";

export function useTransactionsContext() {
    const transactionsContext = useContext(TransactionsContext);

    if (transactionsContext === undefined) throw new Error('useTransactionsContext debe usarse dentro de un TransactionsProvider');

    return transactionsContext;
}
