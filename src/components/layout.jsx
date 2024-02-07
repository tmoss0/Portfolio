/* eslint-disable react/prop-types */
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

const Layout = ({ children }) => {
  return (
    <>
      <Router>
        <nav>
          <ul className='flex flex-row justify-center gap-x-6 text-lg'>
            <li className='hover:cursor-pointer hover:text-sky-500'>
              <Link to='/'>Home</Link>
            </li>
            <li className='hover:cursor-pointer hover:text-sky-500'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='hover:cursor-pointer hover:text-sky-500'>
              <Link to='/resume'>Resume</Link>
            </li>
            <li className='hover:cursor-pointer hover:text-sky-500'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      {children}
    </>
  );
};

export default Layout;
