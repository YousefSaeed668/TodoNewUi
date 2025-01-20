import React, { useState } from 'react';
import {
  BarChart3,
  Bell,
  Calendar,
  Home,
  Layout,
  List,
  PieChart,
  Plus,
  Settings,
  Users,
  Search,
  Heart,
  MessageCircle,
  UserCircle,
  X,
} from 'lucide-react';
import TaskCompletionChart from './components/TaskCompletionChart';
import CategoryDistribution from './components/CategoryDistribution';
import PriorityDistribution from './components/PriorityDistribution';
import TaskList from './components/TaskList';
import Notifications from './components/Notifications';
import TeamPage from './components/TeamPage';
import ProfilePage from './components/ProfilePage';
import TasksPage from './components/TasksPage';
import AddTaskPage from './components/AddTaskPage';

function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  const renderContent = () => {
    if (showAddTask) {
      return <AddTaskPage onClose={() => setShowAddTask(false)} />;
    }

    switch (activeNav) {
      case 'tasks':
        return <TasksPage onAddTask={() => setShowAddTask(true)} />;
      case 'team':
        return <TeamPage />;
      default:
        return (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Total Tasks</h3>
                  <BarChart3 className="h-5 w-5 text-[#38BFA1]" />
                </div>
                <p className="text-3xl font-bold text-gray-900">248</p>
                <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Completion Rate</h3>
                  <PieChart className="h-5 w-5 text-[#38BFA1]" />
                </div>
                <p className="text-3xl font-bold text-gray-900">87%</p>
                <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Upcoming Tasks</h3>
                  <Calendar className="h-5 w-5 text-[#38BFA1]" />
                </div>
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-500 mt-2">Due this week</p>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Task Completion Rate</h3>
                <TaskCompletionChart />
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Category Distribution</h3>
                <CategoryDistribution />
              </div>
            </div>

            {/* Priority Distribution & Task List */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Priority Distribution</h3>
                <PriorityDistribution />
              </div>
              <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Tasks</h3>
                <TaskList />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF1F8] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm m-4 p-6 flex flex-col rounded-2xl">
        <div className="flex items-center gap-2 mb-8">
          <Layout className="h-6 w-6 text-[#38BFA1]" />
          <span className="font-bold text-xl text-gray-800">TaskFlow</span>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {[
              { icon: Home, label: 'Dashboard', id: 'dashboard' },
              { icon: List, label: 'Tasks', id: 'tasks' },
              { icon: Users, label: 'Team', id: 'team' },
              { icon: Calendar, label: 'Calendar', id: 'calendar' },
              { icon: Settings, label: 'Settings', id: 'settings' },
            ].map(({ icon: Icon, label, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    setActiveNav(id);
                    setShowAddTask(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeNav === id && !showAddTask
                      ? 'bg-[#38BFA1] bg-opacity-10 text-[#38BFA1]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {!showAddTask && (
            /* Header */
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 flex items-center justify-between">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="pl-10 pr-4 py-2 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 w-64"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <div className="flex items-center gap-6">
                <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors">
                  <Heart className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors">
                  <MessageCircle className="h-5 w-5 text-gray-500" />
                </button>
                <button 
                  className="p-2 hover:bg-gray-50 rounded-xl transition-colors relative"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button 
                  className="p-2 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setShowProfile(true)}
                >
                  <UserCircle className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          )}

          {renderContent()}
        </div>
      </main>

      {/* Right Sidebar - Notifications */}
      {showNotifications && (
        <aside className="w-80 bg-white shadow-sm rounded-2xl m-4 p-6 transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
            <button 
              onClick={() => setShowNotifications(false)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          <Notifications />
        </aside>
      )}

      {/* Profile Modal */}
      {showProfile && <ProfilePage onClose={() => setShowProfile(false)} />}

      {/* Floating Action Button */}
      {!showAddTask && (
        <button 
          onClick={() => setShowAddTask(true)}
          className="fixed right-8 bottom-8 bg-[#38BFA1] text-white rounded-full p-4 shadow-lg hover:bg-[#2da88d] transition-colors"
        >
          <Plus className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;