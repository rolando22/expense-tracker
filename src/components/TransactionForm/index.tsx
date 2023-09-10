export function TransactionForm() {

    const handlerOnSubmitAddTransaccion = () => {};

    return (
        <form 
            className='grid gap-4'
            onSubmit={handlerOnSubmitAddTransaccion}
        >
            <input 
                className='bg-zinc-600 px-3 py-2 rounded-lg block w-full'
                type='text' 
                placeholder='Ingresar Transacción'
            />
            <input 
                className='bg-zinc-600 px-3 py-2 rounded-lg block w-full'
                type='number' 
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
