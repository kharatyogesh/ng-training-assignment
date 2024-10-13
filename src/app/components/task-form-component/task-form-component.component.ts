import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css']
})
export class TaskFormComponentComponent{
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with controls and validation
    this.taskForm = this.fb.group({
      assignedTo: ['', Validators.required], // Mandatory field
      status: ['', Validators.required], // Mandatory field
      dueDate: ['', Validators.required],
      priority: ['', Validators.required], // Mandatory field
      description: ['']
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.taskForm.valid) {
      console.log('Task form submitted', this.taskForm.value);
      // Further logic like saving data or resetting the form
    } else {
      console.log('Form is invalid');
    }
  }

  // Method to handle canceling the form
  onCancel() {
    this.taskForm.reset();
  }
}
