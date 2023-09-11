import { useTransactionsContext } from "../../hooks/useTransactionsContext";

export function Header() {
    const { total, incomes, expense } = useTransactionsContext();

    return (
        <header className='grid gap-2 bg-neutral-800 p-10 rounded-md w-full'>
            <section className=' flex justify-between items-center'>
                <h4>Ingresos</h4>
                <p>${incomes}</p>
            </section>
            <section className=' flex justify-between items-center'>
                <h4>Gastos</h4>
                <p>${expense * -1}</p>
            </section>
            <section className=' flex justify-between items-center'>
                <h4 className='text-slate-400'>Tu Balance</h4>
                <h1 className='text-2xl font-bold'>${total}</h1>
            </section>
        </header>
    );
}
