export function Header() {
    return (
        <header className='grid gap-2'>
            <section className=' flex justify-between items-center'>
                <h4>Ingresos</h4>
                <p>$10000</p>
            </section>
            <section className=' flex justify-between items-center'>
                <h4>Gastos</h4>
                <p>$5000</p>
            </section>
            <section className=' flex justify-between items-center'>
                <h4 className='text-slate-400'>Tu Balance</h4>
                <h1 className='text-2xl font-bold'>$5000</h1>
            </section>
        </header>
    );
}
