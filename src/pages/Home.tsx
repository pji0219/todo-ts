import { useContext } from 'react';

import Todo from '../components/Todo';
import { TodoContext } from '../context/TodoContext';
import styles from './Home.module.css';

export default function Home() {
  const { todos } = useContext(TodoContext);

  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}
