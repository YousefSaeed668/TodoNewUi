import React, { useState } from 'react';
import { Search, Filter, SortDesc, Plus, Circle, Check, Calendar, Tag } from 'lucide-react';

type Task = {
  id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  category: string;
  dueDate: string;
  progress: number;
  completed: boolean;
};

interface TasksPageProps {
  onAddTask: () => void;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Update dashboard analytics",
    description: "Implement new charts and metrics for the main dashboard",
    priority: "High",
    category: "Development",
    dueDate: "2024-03-20",
    progress: 75,
    completed: false
  },
  {
    id: 2,
    title: "Design system documentation",
    description: "Create comprehensive documentation for our design system",
    priority: "Medium",
    category: "Design",
    dueDate: "2024-03-22",
    progress: 45,
    completed: false
  },
  {
    id: 3,
    title: "User research interviews",
    description: "Conduct interviews with key stakeholders",
    priority: "High",
    category: "Research",
    dueDate: "2024-03-18",
    progress: 30,
    completed: false
  },
  {
    id: 4,
    title: "API integration testing",
    description: "Complete integration tests for new API endpoints",
    priority: "Medium",
    category: "Development",
    dueDate: "2024-03-25",
    progress: 60,
    completed: false
  }
];

const categories = ["All", "Development", "Design", "Research", "Marketing"];

const TasksPage: React.FC<TasksPageProps> = ({ onAddTask }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'High':
        return 'text-red-500';
      case 'Medium':
        return 'text-yellow-500';
      case 'Low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesCategory = selectedCategory === "All" || task.category === selectedCategory;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
              <SortDesc className="h-5 w-5" />
              <span>Sort</span>
            </button>
            <button 
              onClick={onAddTask}
              className="flex items-center gap-2 px-4 py-2 bg-[#38BFA1] text-white rounded-xl hover:bg-[#2da88d] transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Add Task</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-[#38BFA1] bg-opacity-10 text-[#38BFA1]'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? 'bg-[#38BFA1] border-[#38BFA1]'
                      : 'border-gray-300 hover:border-[#38BFA1]'
                  }`}
                >
                  {task.completed && <Check className="h-4 w-4 text-white" />}
                </button>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <Circle className={`h-3 w-3 fill-current ${getPriorityColor(task.priority)}`} />
                        <h3 className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                          {task.title}
                        </h3>
                      </div>
                      <p className={`mt-1 text-sm ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                        {task.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {task.dueDate}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Tag className="h-4 w-4" />
                        {task.category}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium text-gray-700">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#38BFA1] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;