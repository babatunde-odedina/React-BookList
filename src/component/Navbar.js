import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Simple React Reading Booklist</h1>
      <p>Currently you have {books.length} books to get through...</p>

      <button>
        <Link to="/addbook">Add Book</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Navbar;
