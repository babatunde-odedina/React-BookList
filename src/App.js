import BookForm from './component/BookForm';
import BookList from './component/BookList';
import Navbar from './component/Navbar';
import BookContextProvider from './contexts/BookContext';
import './index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <BookContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <BookList />
            </Route>
            <Route path="/addbook">
              <BookForm />
            </Route>
          </Switch>
        </BookContextProvider>
      </Router>
    </div>
  );
}

export default App;
