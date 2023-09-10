export function TransactionsList() {
    return (
        <>
            <h3 className='text-slate-300 text-xl font-bold text-center'>Historial</h3>
            <ul className='grid gap-2'>
                <li 
                    className='bg-zinc-600 px-3 py-1 rounded-lg w-full flex justify-between items-center'
                >
                    <p>Gasto 1</p>
                    <div>
                        <span>$1000</span>
                        <button>E</button>
                    </div>
                </li>
                <li 
                    className='bg-zinc-600 px-3 py-1 rounded-lg w-full flex justify-between items-center'
                >
                    <p>Gasto 2</p>
                    <div>
                        <span>$1000</span>
                        <button>E</button>
                    </div>
                </li>
                <li 
                    className='bg-zinc-600 px-3 py-1 rounded-lg w-full flex justify-between items-center'
                >
                    <p>Gasto 3</p>
                    <div>
                        <span>$1000</span>
                        <button>E</button>
                    </div>
                </li>
            </ul>
        </>
    );
}
