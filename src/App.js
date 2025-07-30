import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Maininfo from './components/Mainifo';
import Projects from './components/Projects';
import Project from './components/Project';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Header/>
   
     <Routes>
        <Route path='/' element={<Maininfo/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='resume/:sec' element={<Resume/>}/>
        <Route path='resume' element={<Resume/>}/>
        <Route path='/projects/:id' element={<Project/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
     </Routes>
     </>
  );
}

export default App;
