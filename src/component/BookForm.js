import { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useHistory } from 'react-router-dom';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        required
      />
      <input type="submit" value="add form" />
    </form>
  );
};

export default BookForm;
