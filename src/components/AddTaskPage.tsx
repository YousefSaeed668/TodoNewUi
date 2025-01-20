import React, { useState } from 'react';
import { ArrowLeft, Plus, X, Calendar, ChevronDown, Check } from 'lucide-react';

interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

interface AddTaskPageProps {
  onClose: () => void;
}

const AddTaskPage: React.FC<AddTaskPageProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('');
  const [subTasks, setSubTasks] = useState<SubTask[]>([]);

  const priorities = ['Low', 'Medium', 'High'];
  const categories = ['Development', 'Design', 'Research', 'Marketing'];

  const handleAddSubTask = () => {
    setSubTasks([
      ...subTasks,
      { id: Date.now().toString(), title: '', completed: false },
    ]);
  };

  const handleRemoveSubTask = (id: string) => {
    setSubTasks(subTasks.filter((task) => task.id !== id));
  };

  const handleSubTaskChange = (id: string, value: string) => {
    setSubTasks(
      subTasks.map((task) =>
        task.id === id ? { ...task, title: value } : task
      )
    );
  };

  const toggleSubTaskCompletion = (id: string) => {
    setSubTasks(
      subTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const calculateProgress = () => {
    if (subTasks.length === 0) return 0;
    const completedTasks = subTasks.filter(task => task.completed).length;
    return Math.round((completedTasks / subTasks.length) * 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle task creation here
    onClose();
  };

  return (
    <div className="min-h-screen bg-[#EEF1F8] p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-2xl flex items-center gap-4 mb-6 sticky top-4 z-10 shadow-sm">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Add New Task</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent"
                  placeholder="Enter task title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent"
                  placeholder="Enter task description"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent"
                  />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <div className="relative">
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent appearance-none"
                  >
                    {priorities.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent appearance-none"
                  >
                    <option value="">Select category</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Progress</h3>
              <span className="text-lg font-bold text-[#38BFA1]">{calculateProgress()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-[#38BFA1] h-2 rounded-full transition-all duration-300"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>
          </div>

          {/* Subtasks Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Subtasks</h3>
            <div className="space-y-4">
              {subTasks.map((subtask) => (
                <div key={subtask.id} className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => toggleSubTaskCompletion(subtask.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      subtask.completed
                        ? 'bg-[#38BFA1] border-[#38BFA1]'
                        : 'border-gray-300 hover:border-[#38BFA1]'
                    }`}
                  >
                    {subtask.completed && <Check className="h-4 w-4 text-white" />}
                  </button>
                  <input
                    type="text"
                    value={subtask.title}
                    onChange={(e) => handleSubTaskChange(subtask.id, e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent"
                    placeholder="Enter subtask"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSubTask(subtask.id)}
                    className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSubTask}
                className="w-full px-4 py-3 border-2 border-dashed border-[#38BFA1] text-[#38BFA1] rounded-xl hover:bg-[#38BFA1] hover:bg-opacity-5 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Add Subtask
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-[#38BFA1] text-white rounded-xl hover:bg-[#2da88d] transition-colors font-medium"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskPage;