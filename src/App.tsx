import { ExpenseChart, Header, TransactionForm, TransactionsList } from './components';
import './App.css';
import { TransactionsProvider } from './context/transactions';

export function App() {
    return (
        <TransactionsProvider>
            <h2 className='text-4xl font-bold text-center'>Seguidor de Gastos</h2>
            <Header />
            <main className='bg-neutral-800 p-10 rounded-md w-full grid gap-8 lg:flex'>
                <section className='w-full'>
                    <TransactionForm />
                </section>
                <section className='bg-zinc-900 p-4 grid gap-2 w-full'>
                    <ExpenseChart />
                    <TransactionsList />
                </section>
            </main>
        </TransactionsProvider>
    );
}
