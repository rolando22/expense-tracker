import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import type { Transaction } from "../../types/transaction";

export function TransactionForm() {
    const { addTransaction } = useTransactionsContext();

    const handlerOnSubmitAddTransaccion = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const newTransaction: Transaction = {
            amount: parseFloat(formData.get('amount')?.toString() || '0'),
            description: formData.get('description')?.toString() ?? '',
        };
        addTransaction(newTransaction);
        form.reset();
    };

    return (
        <form 
            className='grid gap-4'
            onSubmit={handlerOnSubmitAddTransaccion}
        >
            <input 
                className='bg-zinc-600 px-3 py-2 rounded-lg block w-full'
                type='text' 
                name='description'
                placeholder='Ingresar Transacción'
            />
            <input 
                className='bg-zinc-600 px-3 py-2 rounded-lg block w-full'
                type='number' 
                name='amount'
                placeholder='00.00'
                step='0.01'
            />
            <button
                className='bg-indigo-700 px-3 py-2 rounded-lg block w-full'
            >
                Agregar
            </button>
        </form>
    );
}
