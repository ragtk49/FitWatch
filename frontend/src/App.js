import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home.js';
import {About} from './components/About.js';
import {Trainers} from './components/Trainers.js';
import {Courses} from './components/Courses.js';
import { SignIn} from './components/signin';
import { Navbar } from './components/Navbar';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </>
    
  );
}

export default App;
