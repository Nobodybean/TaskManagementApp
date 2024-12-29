import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { PlusCircle, ClipboardList } from 'lucide-react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilters from './components/TaskFilters';
import { Task } from './types/task';
import * as api from './services/api';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filters, setFilters] = useState<{ priority?: string; status?: string }>({});

  useEffect(() => {
    loadTasks();
  }, [filters]);

  const loadTasks = async () => {
    try {
      const response = filters.priority || filters.status
        ? await api.filterTasks(filters.priority, filters.status)
        : await api.getTasks();
      setTasks(response.data);
    } catch (error) {
      toast.error('Failed to load tasks');
    }
  };

  const handleCreateTask = async (data: Omit<Task, 'id' | 'createdAt'>) => {
    try {
      await api.createTask(data);
      toast.success('Task created successfully');
      setShowForm(false);
      loadTasks();
    } catch (error) {
      toast.error('Failed to create task');
    }
  };

  const handleUpdateTask = async (data: Omit<Task, 'id' | 'createdAt'>) => {
    if (!editingTask) return;
    try {
      await api.updateTask(editingTask.id, data);
      toast.success('Task updated successfully');
      setEditingTask(null);
      loadTasks();
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await api.deleteTask(id);
      toast.success('Task deleted successfully');
      loadTasks();
    } catch (error) {
      toast.error('Failed to delete task');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <ClipboardList className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              New Task
            </button>
          </div>

          <TaskFilters onFilterChange={setFilters} />

          <div className="bg-white shadow rounded-lg">
            {(showForm || editingTask) && (
              <div className="p-6 border-b border-gray-200">
                <TaskForm
                  onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
                  onClose={() => {
                    setShowForm(false);
                    setEditingTask(null);
                  }}
                  initialData={editingTask || undefined}
                />
              </div>
            )}

            <TaskList
              tasks={tasks}
              onEdit={setEditingTask}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;