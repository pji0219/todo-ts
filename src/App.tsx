import { Outlet } from 'react-router-dom';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <Outlet />
    </TodoContextProvider>
  );
}

export default App;
