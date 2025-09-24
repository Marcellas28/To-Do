# React Todo App 
A clean and modern todo application built with React and JavaScript.

# Core Functionality
-  Add new tasks with input validation
-  Mark tasks as completed/uncompleted
-  Delete individual tasks
-  Visual distinction between completed and active tasks

# Features
- LocalStorage Persistence - Tasks remain after page refresh
- Filtering - View All, Active, or Completed tasks
- Statistics - Track total, active, completed tasks and completion rate
- Professional Design - Clean, dark theme inspired by modern interfaces
- Responsive - Works on desktop and mobile devices

# React Concepts
- Functional Components - All components use modern function syntax
- React Hooks - useState and useEffect for state management and side effects
- Component Composition - Modular architecture with separate components
- Props & State Management - Proper data flow and state lifting
- Event Handling - Form submissions, clicks, and input changes
- Conditional Rendering - Dynamic UI based on state
- List Rendering - Efficient rendering of todo items

# Project Structure
src/
├── app/
│   ├── page.jsx         
│   └── globals.css      
├── components/
│   ├── todo-form.jsx    
│   ├── todo-list.jsx    
│   ├── todo-item.jsx    
│   ├── todo-filter.jsx  
│   └── todo-stats.jsx   
└── README.md

# Design Decisions

Component Architecture : I broke the app into small, focused components (TodoForm, TodoItem, TodoList) to make the code maintainable and testable.

User Experience : Added smooth animations, loading states, and clear visual feedback to create a polished interface that would impress in a professional setting.

# Prerequisites
- Node.js 
- npm 

# Usage

1. Adding Tasks : Type in the input field and click "Add Task" or press Enter
2. Completing Tasks : Click the checkbox next to any task
3. Deleting Tasks : Hover over a task and click the trash icon
4. Filtering : Use the All/Active/Completed buttons to filter your view
5. Clearing : Click "Clear Completed" to remove all finished tasks

# Key Features Explained

## Input Validation
- Prevents empty task submissions
- Shows error messages for invalid input
- Limits task length to 200 characters

## LocalStorage Persistence
- Automatically saves tasks to browser storage
- Restores tasks when you reload the page
- Handles JSON parsing errors gracefully

## Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Touch-friendly interface

# Browser Support

Works in all modern browsers including:
- Chrome 
- Brave 
- Edge
---
**Built with React, JavaScript, and CSS**

# # # Design Decisions
I made small components that each do one job. Kept all data in the main App component. Used strikethrough and colors to mark done tasks.