import axios from 'axios';
import { Task } from '../types/task';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getTasks = () => api.get<Task[]>('/tasks');

export const createTask = (task: Omit<Task, 'id' | 'createdAt'>) => 
  api.post<Task>('/tasks', task);

export const updateTask = (id: string, task: Partial<Task>) =>
  api.put<Task>(`/tasks/${id}`, task);

export const deleteTask = (id: string) =>
  api.delete(`/tasks/${id}`);

export const filterTasks = (priority?: string, status?: string) =>
  api.get<Task[]>('/tasks/filter', { params: { priority, status } });