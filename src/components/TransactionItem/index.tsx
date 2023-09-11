import { DeleteIcon } from '..';
import { useTransactionsContext } from '../../hooks/useTransactionsContext';

interface Props {
    id: string
    amount: number
    description: string
}

export function TransactionItem({ id, amount, description }: Props) {
    const { removeTransaction } = useTransactionsContext();

    const handlerOnClickRemoveTransaction = () => removeTransaction({ id });
    
    return (
        <li className='bg-zinc-600 px-3 py-1 rounded-lg w-full flex justify-between items-center'>
            <p>{description}</p>
            <div className='flex items-center gap-2'>
                <span>${amount}</span>
                <button 
                    className='bg-red-500 py-0.5 px-1 rounded-md flex justify-center items-center'
                    onClick={handlerOnClickRemoveTransaction}
                >
                    <DeleteIcon />
                </button>
            </div>
        </li>
    );
}
