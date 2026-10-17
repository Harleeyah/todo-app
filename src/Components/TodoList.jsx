import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className="w-full max-w-md">
      {todos.length === 0 ? (
        <div className="text-center py-12 animate-fade-in">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-white text-lg font-medium">No tasks yet</p>
          <p className="text-white text-sm mt-2">Add your first task above to get started!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {todos.map((todo, index) => (
            <div key={todo.id} className="animate-fade-in mb-4 w-full max-w-md" style={{ animationDelay: `${index * 0.1}s` }}>
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
