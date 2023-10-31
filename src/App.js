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
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
          </Routes>
    </BrowserRouter>

    </NoteState>
    </>
  );
}

export default App;
