"use client"
import { useState, useEffect } from "react"
function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const [inputValue, setInputValue] = useState("")
  useEffect(() => {
    const savedTodos = localStorage.getItem("react-todos")
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos).map((todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }))
        setTodos(parsedTodos)
      } catch (error) {
        console.error("Error loading todos from localStorage:", error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("react-todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now().toString() + Math.random().toString(36),
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
      }
      setTodos((prevTodos) => [newTodo, ...prevTodos])
      setInputValue("")
    }
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(inputValue)
  }

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed
      case "completed":
        return todo.completed
      default:
        return true
    }
  })
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length
  const activeTodos = totalTodos - completedTodos

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        {}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Your To-Do List</h1>
          <p className="text-muted-foreground">Stay organized with your daily tasks</p>
        </header>

        {}
        <form onSubmit={handleSubmit} className="todo-form mb-6">
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task..."
              className="task-input"
            />
            <button type="submit" className="add-btn">
              Add Task
            </button>
          </div>
        </form>

        {}
        {totalTodos > 0 && (
          <div className="todo-stats mb-6">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">{totalTodos}</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{activeTodos}</span>
                <span className="stat-label">Active</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{completedTodos}</span>
                <span className="stat-label">Completed</span>
              </div>
            </div>
          </div>
        )}

        {}
        <div className="filter-buttons mb-6">
          <button onClick={() => setFilter("all")} className={`filter-btn ${filter === "all" ? "active" : ""}`}>
            All
          </button>
          <button onClick={() => setFilter("active")} className={`filter-btn ${filter === "active" ? "active" : ""}`}>
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`filter-btn ${filter === "completed" ? "active" : ""}`}
          >
            Completed
          </button>
          {completedTodos > 0 && (
            <button onClick={clearCompleted} className="clear-btn">
              Clear Completed
            </button>
          )}
        </div>

        {}
        <div className="todo-list">
          {filteredTodos.map((todo) => (
            <div key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
              <div className="todo-content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
              </div>
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn" aria-label="Delete task">
                ×
              </button>
            </div>
          ))}
        </div>

        {}
        {filteredTodos.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">⏳To-Do⏳</div>
            <h3 className="empty-title">
              {filter === "completed" ? "No completed tasks" : filter === "active" ? "No active tasks" : "No tasks yet"}
            </h3>
            <p className="empty-description">
              {filter === "all"
                ? "Add your first task above to get started!"
                : `Switch to "All" to see your ${filter === "completed" ? "active" : "completed"} tasks`}
            </p>
            <p className="signature">© Marcellas Did It ✍️</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default App
