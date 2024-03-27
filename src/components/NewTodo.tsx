import { ChangeEvent, FormEvent, useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

export default function NewTodo() {
  const { onAddTodoHandler } = useTodoContext();

  const [newTodo, setNewTodo] = useState('');

  const onChangeNewTodoHnadler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddTodoHandler(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type='text' value={newTodo} onChange={onChangeNewTodoHnadler} />
      <button type='submit'>추가</button>
    </form>
  );
}
