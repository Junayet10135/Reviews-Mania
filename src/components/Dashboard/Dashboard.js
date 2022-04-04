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
        <div className='mt-8 mb-4'>
        <h2 className='text-5xl font-bold'>DASHBOARD</h2>
            <div className='grid gap-4 grid-cols-2 mt-8'>
                <div>
                    <LineChart width={400} height={400} data={data}>
                        <Line dataKey={'investment'} fill="#8884d8" stroke='#65CAC8'></Line>
                        <Line dataKey={'revenue'} fill="#82ca9d" stroke='#82ca9d'></Line>
                        <Line dataKey={'sell'} fill="#65CAC8" stroke='#8884d8'></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend />
                    </LineChart>
                    <h2> <strong>Fig:</strong> Line Chart</h2>
                </div>
                <div>
                    <BarChart width={500} height={400} data={data}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey={'month'}></XAxis>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                        <Bar dataKey="investment" fill="#65CAC8" />
                    </BarChart>
                    <h2><strong>Fig:</strong> Bar Chart</h2>
                </div>
                <div className='mt-8 block'>
                    <AreaChart width={750} height={350} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorGv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#EFCB8C" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#EFCB8C" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        <Area type="monotone" dataKey="investment" stroke="#EFCB8C" fillOpacity={1} fill="url(#colorGv)" />
                        <Tooltip></Tooltip>
                        <Legend />
                    </AreaChart>
                    <h2><strong>Fig:</strong> Area Chart</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;