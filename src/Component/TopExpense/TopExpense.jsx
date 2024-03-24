import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function TopExpense(){
    const data01 = [
        { name: "Food", value: 100, color: "#A000FF" },
        { name: "Entertainment", value: 350, color: "#FF9304" },
        { name: "Travel", value: 50, color: "#FDE006" }
    ];

    data01.sort((obj1, obj2) => {
        return obj2.value - obj1.value;
    });

    return (
        <div className="bar-chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data01}
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
