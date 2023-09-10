import { Header, TransactionForm, TransactionsList } from './components';
import './App.css';

export function App() {
    return (
        <>
            <h2 className='text-4xl font-bold text-center'>Seguidor de Gastos</h2>
            <Header />
            <main className='bg-neutral-800 p-10 rounded-md w-full'>
                <TransactionForm />
            </main>
            <footer className='bg-zinc-900 p-4 grid gap-2'>
                <TransactionsList />
            </footer>
        </>
    );
}
