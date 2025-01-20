import React from 'react';
import { Circle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Update dashboard design',
    category: 'Design',
    priority: 'High',
    dueDate: '2024-03-15',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Implement authentication',
    category: 'Development',
    priority: 'High',
    dueDate: '2024-03-16',
    status: 'Todo',
  },
  {
    id: 3,
    title: 'Write API documentation',
    category: 'Documentation',
    priority: 'Medium',
    dueDate: '2024-03-18',
    status: 'In Progress',
  },
];

const TaskList = () => {
  return (
    <div className="divide-y divide-gray-100">
      {tasks.map((task) => (
        <div key={task.id} className="py-3 flex items-center justify-between hover:bg-gray-50 rounded-xl px-3 transition-colors">
          <div className="flex items-center gap-4">
            <Circle className="h-2 w-2 text-[#38BFA1] fill-current" />
            <div>
              <h4 className="text-sm font-medium text-gray-800">{task.title}</h4>
              <p className="text-sm text-gray-500">{task.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
              task.priority === 'High' 
                ? 'bg-red-100 text-red-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {task.priority}
            </span>
            <span className="text-sm text-gray-500">{task.dueDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;