import React from 'react';
import BackButton from './components/BackButton';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function ConsumptionStatistics({navigation}) {
    
    const data = [
        { date: '2024-01-01', consumption: 100 },
        { date: '2024-01-02', consumption: 150 },
        { date: '2024-01-03', consumption: 120 },
        
    ];

    return (
        
        <div>
            <BackButton goBack={navigation.goBack} />
            <h1>Estadísticas de consumo de Energía</h1>
            <LineChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

