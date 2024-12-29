import React from 'react';
import { Priority, Status } from '../types/task';

interface TaskFiltersProps {
  onFilterChange: (filters: { priority?: string; status?: string }) => void;
}

export default function TaskFilters({ onFilterChange }: TaskFiltersProps) {
  const handleFilterChange = (field: string, value: string) => {
    onFilterChange({ [field]: value === 'all' ? undefined : value });
  };

  return (
    <div className="flex gap-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
        <select
          onChange={(e) => handleFilterChange('priority', e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">All Statuses</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}