import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Task {
  assignedTo: string;
  status: string;
  dueDate: string;
  priority: string;
  comments: string;
}

@Component({
  selector: 'app-task-list-component',
  imports:[CommonModule],
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css'],
  standalone: true
})
export class TaskListComponent {
  tasks: Task[] = [
    { assignedTo: 'John Doe', status: 'Pending', dueDate: '2024-10-15', priority: 'High', comments: 'Urgent task' },
    { assignedTo: 'Jane Smith', status: 'Completed', dueDate: '2024-09-20', priority: 'Low', comments: 'All done' },
    { assignedTo: 'Michael Green', status: 'In Progress', dueDate: '2024-10-25', priority: 'Medium', comments: 'Ongoing' },
    { assignedTo: 'Anna White', status: 'Pending', dueDate: '2024-11-01', priority: 'High', comments: 'Important' },
    // More tasks here...
  ];

  // Pagination properties
  currentPage: number = 1;
  tasksPerPage: number = 3;
  paginatedTasks: Task[] = [];

  ngOnInit() {
    this.updatePaginatedTasks();
  }

  get totalPages(): number {
    return Math.ceil(this.tasks.length / this.tasksPerPage);
  }

  updatePaginatedTasks() {
    const startIndex = (this.currentPage - 1) * this.tasksPerPage;
    const endIndex = startIndex + this.tasksPerPage;
    this.paginatedTasks = this.tasks.slice(startIndex, endIndex);
  }

  firstPage() {
    this.currentPage = 1;
    this.updatePaginatedTasks();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedTasks();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedTasks();
    }
  }

  lastPage() {
    this.currentPage = this.totalPages;
    this.updatePaginatedTasks();
  }
}
