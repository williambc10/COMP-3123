import './App.css';
import UserList from './components/UserList';
import { Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import UserDetails from './components/UserDetails';
import {Component} from 'react';

//function App() {
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Axios and Navigation</h1>
        {/*<UserList/>*/}
        <BrowserRouter>
        <nav>
          <a href='/home'>Home</a> | 
          <NavLink to='/about?college=GBC'>About Us</NavLink> | 
          <NavLink to='/contact/William'>Contact</NavLink> | {/*actaul activation of pattern '/contact/William' */}
          <NavLink to='/userlist'>User List</NavLink>
        </nav>
          <Routes>
              <Route path='/home' element={<Home/>}/> {/*if there is no path it will go to main*/}
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/contact/:name' element={<Contact/>}/> {/* this is where patterns go i.e. '/contact/:name' */}
              <Route path='/UserList' element={<UserList/>}/>
              <Route path='/User/:userid' element={<UserDetails/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
//export default App;
