interface Props {
    amount: number
    description: string
}

export function TransactionItem({ amount, description }: Props) {
    return (
        <li className='bg-zinc-600 px-3 py-1 rounded-lg w-full flex justify-between items-center'>
            <p>{description}</p>
            <div>
                <span>${amount}</span>
                <button>E</button>
            </div>
        </li>
    );
}
