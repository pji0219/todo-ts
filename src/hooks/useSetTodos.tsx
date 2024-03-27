import { useEffect } from 'react';

import { Todo } from '../context/TodoContext';

export default function useSetTodos(todos: Todo[]) {
  useEffect(() => {
    // 배열이나 객체를 저장해야 된다면 Value는 string 타입으로 저장해야하기 때문에 string 이 아니라면 string 형태로 변환해줘야한다.
    localStorage.setItem('todoData', JSON.stringify(todos));
  }, [todos]);
}
