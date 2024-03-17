import { ChangeEvent, useContext, useState } from 'react';

import { TodoContext } from '../context/TodoContext';
import styles from './Todo.module.css';

type Props = {
  id: any;
  text: string;
};

export default function Todo({ id, text }: Props) {
  const [editedTodo, setEditedTodo] = useState(text);
  const [editMode, setEditMode] = useState(false);
  const { onUpdateTodoHandler, onRemoveTodoHandler } = useContext(TodoContext);

  const onChangeTodoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedTodo(event.target.value);
  };

  const onEditModeHandler = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <li className={styles.todo}>
      {editMode ? (
        <>
          <input value={editedTodo} onChange={onChangeTodoHandler} />
          <div>
            <button
              onClick={() => {
                onUpdateTodoHandler(id, editedTodo);
                onEditModeHandler();
              }}
            >
              제출
            </button>
            <button onClick={onEditModeHandler}>취소</button>
          </div>
        </>
      ) : (
        <>
          <span>{text}</span>
          <div>
            <button onClick={onEditModeHandler}>수정</button>
            <button
              onClick={() => {
                onRemoveTodoHandler(id);
              }}
            >
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
}
