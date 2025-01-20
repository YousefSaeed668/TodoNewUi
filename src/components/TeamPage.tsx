import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  BarChart3,
  Calendar,
  ChevronRight,
  Plus,
} from 'lucide-react';

const teams = [
  {
    id: 1,
    name: 'Design Team',
    role: 'Admin',
    members: 12,
    projects: 8,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    name: 'Development Team',
    role: 'Member',
    members: 15,
    projects: 10,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    name: 'Marketing Team',
    role: 'Admin',
    members: 8,
    projects: 5,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=150&h=150&fit=crop',
  },
];

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    tasksCompleted: 45,
    email: 'sarah.j@company.com',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
    tasksCompleted: 32,
    email: 'michael.c@company.com',
  },
  {
    id: 3,
    name: 'Alex Morgan',
    role: 'Project Manager',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    tasksCompleted: 58,
    email: 'alex.m@company.com',
  },
];

const TeamPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [showNewTeamModal, setShowNewTeamModal] = useState(false);
  const [showTeamSelector, setShowTeamSelector] = useState(false);

  return (
    <div className="space-y-6 relative">
      {/* Team Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setShowTeamSelector(!showTeamSelector)}
            className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-xl transition-colors"
          >
            <img
              src={selectedTeam.image}
              alt="Team"
              className="w-16 h-16 rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{selectedTeam.name}</h1>
              <p className="text-gray-500">{selectedTeam.members} members · {selectedTeam.projects} projects</p>
              <span className="text-sm text-[#38BFA1]">You are a {selectedTeam.role}</span>
            </div>
          </button>
          <div className="flex gap-3">
            <button 
              onClick={() => setShowNewTeamModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span className="font-medium">New Team</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#38BFA1] bg-opacity-10 text-[#38BFA1] rounded-xl hover:bg-opacity-20 transition-colors">
              <UserPlus className="h-5 w-5" />
              <span className="font-medium">Add Member</span>
            </button>
          </div>
        </div>
      </div>

      {/* Team Selector Dropdown */}
      {showTeamSelector && (
        <div className="absolute top-28 left-6 w-96 bg-white rounded-2xl shadow-lg z-10 p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Switch Team</h3>
          <div className="space-y-2">
            {teams.map((team) => (
              <button
                key={team.id}
                onClick={() => {
                  setSelectedTeam(team);
                  setShowTeamSelector(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  selectedTeam.id === team.id
                    ? 'bg-[#38BFA1] bg-opacity-10 text-[#38BFA1]'
                    : 'hover:bg-gray-50'
                }`}
              >
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div className="text-left">
                  <h4 className="font-medium">{team.name}</h4>
                  <p className="text-sm text-gray-500">
                    {team.members} members · {team.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* New Team Modal */}
      {showNewTeamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white rounded-2xl p-6 w-[480px]">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Team</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent"
                  placeholder="Enter team name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#38BFA1] focus:ring-opacity-50 focus:border-transparent"
                  placeholder="Enter team description"
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowNewTeamModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowNewTeamModal(false)}
                  className="px-4 py-2 bg-[#38BFA1] text-white rounded-xl hover:bg-[#2da88d] transition-colors"
                >
                  Create Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the content */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Tasks Completed</h3>
            <BarChart3 className="h-5 w-5 text-[#38BFA1]" />
          </div>
          <p className="text-3xl font-bold text-gray-900">135</p>
          <p className="text-sm text-gray-500 mt-2">+22% from last month</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Projects</h3>
            <Calendar className="h-5 w-5 text-[#38BFA1]" />
          </div>
          <p className="text-3xl font-bold text-gray-900">8</p>
          <p className="text-sm text-gray-500 mt-2">2 due this week</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Team Members</h3>
            <Users className="h-5 w-5 text-[#38BFA1]" />
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500 mt-2">+2 this month</p>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Team Members</h2>
          <button className="text-[#38BFA1] hover:text-[#2da88d] font-medium flex items-center gap-1">
            View All
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-2xl object-cover mb-4"
                />
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                <div className="flex gap-4 mb-6">
                  <button className="p-2 bg-white rounded-xl hover:bg-gray-50 transition-colors">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </button>
                  <button className="p-2 bg-white rounded-xl hover:bg-gray-50 transition-colors">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
                <div className="w-full">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Tasks Completed</span>
                    <span className="font-medium text-gray-800">{member.tasksCompleted}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#38BFA1] h-2 rounded-full"
                      style={{ width: `${(member.tasksCompleted / 60) * 100}%` }}
                    />
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

export default TeamPage;