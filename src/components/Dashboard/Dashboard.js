import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);
    return (
        <div>
            <div>
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>

            </div>
            <div>
                <BarChart width={400} height={400} data={data}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;