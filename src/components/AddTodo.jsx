import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandle = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <form onSubmit={addTodoHandle}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-800 rounded border
        border-gray-700 focus:border-indigo-500
        focus:ring-2 focus:ring-indigo-900 text-base 
        outline-none text-gray-100 py-1 px-3 leading-8
        transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0
        py-2 px-6 focus:outline-none mx-5
        hover:bg-indigo-600 rounded text-lg
        "
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
