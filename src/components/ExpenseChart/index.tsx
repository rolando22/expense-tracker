import { VictoryLabel, VictoryPie } from 'victory';
import { useTransactionsContext } from '../../hooks/useTransactionsContext';
import { ChartIcon } from '..';

export function ExpenseChart() {
    const { incomes, expense } = useTransactionsContext();

    const expensesPercentage = Math.round((expense * -1 / incomes) * 100);
    const incomesPercentage = 100 - expensesPercentage;

    return (
        <section className='bg-zinc-950'>
            {incomes === 0 && expense === 0 
                ? <section className='grid justify-center content-center w-full'>
                    <ChartIcon />
                    <p className='text-center'>No hay datos aún</p>
                </section>
                : <VictoryPie 
                    colorScale={["#e74c3c", "#2ecc71"]}
                    data={[
                        { x: "Expenses", y: expensesPercentage },
                        { x: "Incomes", y: incomesPercentage },
                    ]}
                    animate={{ duration: 2000 }}
                    labels={(datum) => datum.y}
                    labelComponent={
                        <VictoryLabel 
                            angle={45}
                            style={{ fill: 'white' }}
                        />
                    }
                />
            }
        </section>
    );
}
