import { VictoryLabel, VictoryPie } from "victory";

export function ExpenseChart() {
    return (
        <section className='bg-zinc-950'>
            <VictoryPie 
                colorScale={["#e74c3c", "#2ecc71"]}
                data={[
                    { x: "Expenses", y: 35 },
                    { x: "Incomes", y: 40 },
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
        </section>
    );
}