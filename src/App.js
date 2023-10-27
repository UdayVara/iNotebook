import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <NoteState>

    <BrowserRouter>
          <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/Login" element={<Login />} />
                  <Route exact path="/signup" element={<Signup />} />
          </Routes>
    </BrowserRouter>

    </NoteState>
    </>
  );
}

export default App;
