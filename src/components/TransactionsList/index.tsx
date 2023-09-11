import { TransactionItem } from './../';
import { useTransactionsContext } from '../../hooks/useTransactionsContext';

export function TransactionsList() {
    const { transactions } = useTransactionsContext();

    return (
        <>
            <h3 className='text-slate-300 text-xl font-bold text-center'>Historial</h3>
            <ul className='grid gap-2'>
                {transactions.map(transaction => 
                    <TransactionItem 
                        key={transaction.id} 
                        amount={transaction.amount}                        
                        description={transaction.description}
                    />
                )}
            </ul>
        </>
    );
}
