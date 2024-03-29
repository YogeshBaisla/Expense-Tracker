import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function TopExpense({data}){
    
    const copyData = [...data]
    // copyData.sort((obj1, obj2) => {
    //     return obj2.value - obj1.value;
    // });

    return (
        <div className="bar-chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={copyData}
                    layout="vertical"
                >
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" width={120} />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
