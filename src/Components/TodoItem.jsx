function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const colors = [
    'from-rose-500/20 to-pink-500/20 border-rose-400/30',
    'from-orange-500/20 to-yellow-500/20 border-orange-400/30',
    'from-green-500/20 to-emerald-500/20 border-green-400/30',
    'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
    'from-purple-500/20 to-violet-500/20 border-purple-400/30',
    'from-pink-500/20 to-rose-500/20 border-pink-400/30'
  ];

  const colorIndex = todo.id % colors.length;
  const itemColors = colors[colorIndex];

  return (
    <div className={`group flex items-center justify-between p-4 bg-gradient-to-r ${itemColors} backdrop-blur-sm rounded-2xl border hover:bg-white/15 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
      <div className="flex items-center gap-3 flex-1">
        <div
          onClick={() => toggleTodo(todo.id)}
          className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
            todo.completed
              ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-500"
              : "border-white/40 hover:border-white/60 bg-white/10"
          }`}
        >
          {todo.completed && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span
          onClick={() => toggleTodo(todo.id)}
          className={`flex-1 cursor-pointer transition-all duration-300 ${
            todo.completed
              ? "line-through text-white/50"
              : "text-white hover:text-white/90"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="opacity-0 group-hover:opacity-100 ml-4 px-3 py-1 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300 text-sm font-medium border border-red-400/30"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
