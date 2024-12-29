package com.example.taskmanagerapp.service;

import com.example.taskmanagerapp.model.Task;
import com.example.taskmanagerapp.model.Status;
import com.example.taskmanagerapp.model.Priority;
import java.util.List;
import java.util.Optional;

public interface TaskService {
    Task createTask(Task task);
    List<Task> getAllTasks();
    Optional<Task> getTaskById(Long id);
    Task updateTask(Long id, Task task);
    void deleteTask(Long id);
    List<Task> filterTasks(Status status, Priority priority);
}
