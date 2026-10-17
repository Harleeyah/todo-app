function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const colors = [
    'from-red-400/30 to-pink-400/30 border-red-300/50 hover:from-red-500/40 hover:to-pink-500/40',
    'from-orange-400/30 to-yellow-400/30 border-orange-300/50 hover:from-orange-500/40 hover:to-yellow-500/40',
    'from-green-400/30 to-emerald-400/30 border-green-300/50 hover:from-green-500/40 hover:to-emerald-500/40',
    'from-blue-400/30 to-cyan-400/30 border-blue-300/50 hover:from-blue-500/40 hover:to-cyan-500/40',
    'from-purple-400/30 to-violet-400/30 border-purple-300/50 hover:from-purple-500/40 hover:to-violet-500/40',
    'from-pink-400/30 to-rose-400/30 border-pink-300/50 hover:from-pink-500/40 hover:to-rose-500/40'
  ];

  const colorIndex = todo.id % colors.length;
  const itemColors = colors[colorIndex];

  return (
    <div className={`group flex items-center justify-between p-5 bg-gradient-to-r ${itemColors} backdrop-blur-md rounded-2xl border-2 hover:bg-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-105 border-white/20`}>
      <div className="flex items-center gap-4 flex-1">
        <div
          onClick={() => toggleTodo(todo.id)}
          className={`w-8 h-8 rounded-full border-3 cursor-pointer transition-all duration-300 flex items-center justify-center shadow-lg ${
            todo.completed
              ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-400 shadow-green-400/50"
              : "border-white/60 hover:border-white bg-white/20 hover:bg-white/30"
          }`}
        >
          {todo.completed && (
            <svg className="w-4 h-4 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span
          onClick={() => toggleTodo(todo.id)}
          className={`flex-1 cursor-pointer transition-all duration-300 text-lg font-medium ${
            todo.completed
              ? "line-through text-white"
              : "text-white drop-shadow-sm"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="delete-button ml-4 px-4 py-2 text-white rounded-xl transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/20"
      >
        🗑️ Delete
      </button>
    </div>
  );
}

export default TodoItem;
