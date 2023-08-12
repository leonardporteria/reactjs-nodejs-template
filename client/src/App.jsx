import { BrowserRouter, Route, Routes, Link, useMatch } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Features from './pages/features/Features';
import Footer from './components/Footer';

import './App.scss';

const NavLink = ({ to, label }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={match ? 'currentpage' : 'App__Header__Links__Link'}
    >
      {label}
    </Link>
  );
};

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav className='App__Header'>
          <h1 className='App__Header__Title'>React + Node Starter</h1>

          <div className='App__Header__Links'>
            <NavLink to='/' label='Home'>
              Home
            </NavLink>
            <NavLink to='/about' label='About'>
              About
            </NavLink>
            <NavLink to='/features' label='Features'>
              Features
            </NavLink>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
