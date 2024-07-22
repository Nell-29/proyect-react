

import {Routes, Route} from 'react-router-dom';

import LoginPage from '../src/pages/LoginPage';
import {HomePage} from'../src/pages/HomePage';
import {ProfilePage} from './pages/ProfilePage' ;
import {SettingsPage} from './pages/SettingsPage';

import { PrivetLayout } from './components/PrivetLayout';
import HomeLayout from '../src/components/HomeLayout';
import RegisterPage from './pages/RegisterPage';
import ClassPage from './pages/ClassPage';


import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Route>
        <Route path='/dashboard' element={<PrivetLayout/>}>
        <Route path='profile' element={<ProfilePage/>}/>
        <Route path='settings' element={<SettingsPage/>}/>
        <Route path='class' element={<ClassPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
