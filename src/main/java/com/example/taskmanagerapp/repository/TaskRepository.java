package com.example.taskmanagerapp.repository;

import com.example.taskmanagerapp.model.Task;
import com.example.taskmanagerapp.model.Status;
import com.example.taskmanagerapp.model.Priority;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStatusAndPriority(Status status, Priority priority);
    List<Task> findByStatus(Status status);
    List<Task> findByPriority(Priority priority);
}
