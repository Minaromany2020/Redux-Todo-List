import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const todoRemoveHandle = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex justify-between px-5 bg-gray-500 my-3 p-2 w-screen rounded"
          >
            <h1 className="text-white mt-3">{todo.text}</h1>
            <button
              className="btn btn-error"
              onClick={() => todoRemoveHandle(todo.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
