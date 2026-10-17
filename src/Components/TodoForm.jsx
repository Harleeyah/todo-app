import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="✨ What amazing task shall we add?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 min-w-0 px-4 py-3 bg-gradient-to-r from-white/20 to-white/10 border-2 border-white/30 rounded-2xl text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 backdrop-blur-sm text-base font-medium shadow-lg"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-[#D527B7] text-white rounded-2xl hover:bg-[#bd1f9f] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 font-bold text-base border-2 border-white/20"
        >
          🚀 Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
