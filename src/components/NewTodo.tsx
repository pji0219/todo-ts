import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function NewTodo() {
  const { onAddTodoHandler } = useContext(TodoContext);

  // todo: 커스텀 훅으로 input로직 재사용 하기
  const [newTodo, setNewTodo] = useState('');

  const onChangeNewTodoHnadler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddTodoHandler(newTodo);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type='text' value={newTodo} onChange={onChangeNewTodoHnadler} />
      <button type='submit'>추가</button>
    </form>
  );
}
