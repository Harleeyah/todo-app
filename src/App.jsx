import { useState } from 'react'
import TodoForm from './Components/TodoForm.jsx'
import TodoList from './Components/TodoList.jsx'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b0b60] via-[#2b0845] to-[#1d0630] flex items-center justify-center p-4 relative overflow-hidden text-white">
      <div className="w-full max-w-[600px] backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 p-10 animate-fade-in relative z-10 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
            🌈 My Amazing Tasks
          </h1>
          <p className="text-white text-lg font-medium mb-6">
            Let's get things done! ✨
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="flex justify-center">
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </div>
      </div>
    </div>
  )
}

export default App
