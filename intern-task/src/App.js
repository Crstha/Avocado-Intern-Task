import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './crud/edit';
import View from './crud/view';

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/view/:id' element={<View />}></Route>
          <Route exact path='/edit/:id' element={<Edit />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
