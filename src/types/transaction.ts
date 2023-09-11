export interface Transaction {
    description: string
    amount: number
}

export interface TransactionWithId extends Transaction {
    id: string
}

export type TransactionsState = Transaction[]

export type TransactionsTypeAction = 
    | { type: 'ADD_TRANSACTION', payload: Transaction}
    | { type: 'REMOVE_TRANSACTION', payload: string}
