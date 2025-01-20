import React from 'react';
import { Bell, Users, Calendar } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'New team member joined',
    description: 'Sarah Johnson joined the Design team',
    icon: Users,
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'Task deadline approaching',
    description: 'Dashboard redesign due in 2 days',
    icon: Calendar,
    time: '5 hours ago',
  },
  {
    id: 3,
    title: 'New task assigned',
    description: 'Review API documentation',
    icon: Bell,
    time: '1 day ago',
  },
];

const Notifications = () => {
  return (
    <div className="space-y-3">
      {notifications.map((notification) => {
        const Icon = notification.icon;
        return (
          <div
            key={notification.id}
            className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Icon className="h-5 w-5 text-[#38BFA1]" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-800">{notification.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{notification.description}</p>
                <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;