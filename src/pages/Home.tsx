import { useContext } from 'react';

import Todo from '../components/Todo';
import { TodoContext } from '../context/TodoContext';

export default function Home() {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}
