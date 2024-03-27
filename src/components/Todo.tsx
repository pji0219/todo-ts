import { ChangeEvent, useState } from 'react';

import { useTodoContext } from '../context/TodoContext';
import TodoContainer from './UI/TodoContainer';

type Props = {
  id: any;
  text: string;
  isCompleted: boolean;
};

export default function Todo({ id, text, isCompleted }: Props) {
  const [editedTodo, setEditedTodo] = useState(text);
  const [editMode, setEditMode] = useState(false);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const { onUpdateTodoHandler, onRemoveTodoHandler } = useTodoContext();

  const onChangeTodoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedTodo(event.target.value);
  };

  const onEditModeHandler = () => {
    setEditMode((prev) => !prev);
  };

  const onCompleteHadler = () => {
    setIsComplete((prev) => !prev);
    onUpdateTodoHandler(id, text, isComplete);
  };

  return (
    <TodoContainer>
      {editMode ? (
        <>
          <input value={editedTodo} onChange={onChangeTodoHandler} />
          <div>
            <button
              onClick={() => {
                onUpdateTodoHandler(id, editedTodo, isCompleted);
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
            <label htmlFor='completed'>완료</label>
            <input
              type='checkbox'
              checked={isComplete}
              onChange={onCompleteHadler}
            />
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
    </TodoContainer>
  );
}
