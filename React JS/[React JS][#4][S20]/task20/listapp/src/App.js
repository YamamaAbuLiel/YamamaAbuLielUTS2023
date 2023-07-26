import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Counter from './Counter';

export default function App  ()  {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Counter totalCount={todos.length} />
      <TodoList todos={todos} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

;
