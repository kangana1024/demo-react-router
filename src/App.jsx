import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/nav';
import CreateTodo from './pages/create';
import Home from './pages/home';
import TodoList from './pages/todo';

function App() {
  return (

    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateTodo />} />
          <Route path='/todo' element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
