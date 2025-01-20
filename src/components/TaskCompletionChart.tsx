import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mon', completion: 65 },
  { date: 'Tue', completion: 78 },
  { date: 'Wed', completion: 82 },
  { date: 'Thu', completion: 75 },
  { date: 'Fri', completion: 85 },
  { date: 'Sat', completion: 90 },
  { date: 'Sun', completion: 87 },
];

const TaskCompletionChart = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="date" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="completion" 
            stroke="#38BFA1" 
            strokeWidth={2}
            dot={{ fill: '#38BFA1', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#38BFA1' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskCompletionChart;