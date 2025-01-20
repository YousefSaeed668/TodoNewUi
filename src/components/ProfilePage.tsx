import React, { useState } from 'react';
import { Camera, Moon, Bell, Shield, LogOut } from 'lucide-react';

const ProfilePage = ({ onClose }: { onClose: () => void }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    taskUpdates: true,
    teamInvites: true,
    deadlineReminders: true,
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-[#EEF1F8] rounded-2xl w-full max-w-6xl mt-16 relative">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 mb-6 relative">
          <div className="flex items-center gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                alt="Profile"
                className="w-24 h-24 rounded-2xl object-cover"
              />
              <button className="absolute -right-2 -bottom-2 p-2 bg-[#38BFA1] rounded-xl text-white hover:bg-[#2da88d] transition-colors">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Alex Morgan</h1>
              <p className="text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6 p-6">
          {/* Left Column - Personal Information */}
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="alex.m@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <button className="text-[#38BFA1] hover:text-[#2da88d] text-sm font-medium">
                  Change Password
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Zone
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent">
                  <option>Pacific Time (PT)</option>
                  <option>Mountain Time (MT)</option>
                  <option>Central Time (CT)</option>
                  <option>Eastern Time (ET)</option>
                </select>
              </div>
              <button className="w-full px-6 py-3 bg-[#38BFA1] text-white rounded-xl hover:bg-[#2da88d] transition-colors font-medium">
                Save Changes
              </button>
            </form>
          </div>

          {/* Right Column - Preferences & Settings */}
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Preferences & Settings</h2>
            <div className="space-y-6">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Moon className="h-5 w-5 text-gray-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">Dark Mode</h3>
                    <p className="text-sm text-gray-500">Enable dark theme</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    isDarkMode ? 'bg-[#38BFA1]' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                      isDarkMode ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Notification Preferences */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-800 flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </h3>
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                    </span>
                    <button
                      onClick={() =>
                        setNotifications((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
                      }
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        value ? 'bg-[#38BFA1]' : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          value ? 'translate-x-6' : ''
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              {/* Session Management */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-800 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Session Management
                </h3>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-4">
                    You're currently signed in on this device. You can sign out of all other devices if you suspect any unauthorized access.
                  </p>
                  <button className="px-4 py-2 text-[#38BFA1] hover:bg-[#38BFA1] hover:bg-opacity-10 rounded-lg transition-colors text-sm font-medium">
                    Sign out of other devices
                  </button>
                </div>
              </div>

              {/* Logout Button */}
              <button className="w-full px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-2">
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;