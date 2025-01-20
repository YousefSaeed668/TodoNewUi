import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { priority: 'High', tasks: 8 },
  { priority: 'Medium', tasks: 15 },
  { priority: 'Low', tasks: 12 },
];

const PriorityDistribution = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="priority" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Bar 
            dataKey="tasks" 
            fill="#38BFA1"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriorityDistribution;