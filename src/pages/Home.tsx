import NewTodo from '../components/NewTodo';
import Todo from '../components/Todo';
import { useTodoContext } from '../context/TodoContext';
import styles from './Home.module.css';

export default function Home() {
  const { todos } = useTodoContext();

  return (
    <>
      <ul className={styles.todo_list}>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </ul>
      <NewTodo />
    </>
  );
}
