import {Routes, Route} from 'react-router-dom';

import {LoginPag} from './pages/LoginPage';
import {HomePage} from './pages/HomePage';
import {SingUpPage} from './pages/SingUpPage';
import {ProfilePage} from './pages/ProfilePage' ;
import {SettingsPage} from './pages/SettingsPage';

import { PrivetLayout } from './components/PrivetLayout';
import {HomeLayout} from './components/HomeLayout'; 
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPag/>}/>
        <Route path='/register' element={<SingUpPage/>}/>
      </Route>

      <Route path='/dashboard' element={<PrivetLayout/>}>
        <Route path='profile' element={<ProfilePage/>}/>
        <Route path='settings' element={<SettingsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
