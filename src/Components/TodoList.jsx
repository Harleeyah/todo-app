import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className="w-full max-w-md">
      {todos.length === 0 ? (
        <div className="text-center py-12 animate-fade-in">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-white/70 text-lg font-medium">No tasks yet</p>
          <p className="text-white/50 text-sm mt-2">Add your first task above to get started!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {todos.map((todo, index) => (
            <div key={todo.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
