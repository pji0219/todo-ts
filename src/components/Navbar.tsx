import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <h1>Todo list</h1>
      <nav>
        <Link to={'/'}>Active</Link>
        <Link to={'/completed'}>Completed</Link>
      </nav>
    </header>
  );
}
