import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/Forgot-Password';


import Users from './pages/Users';
import User from './pages/User'


import Orders from './pages/Orders';
import Order from './pages/Order';

import Themes from './pages/Themes';
import Theme from './pages/Theme';
import CreateTemplate from './pages/Create-Template';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={(<Login />)} />
        <Route path='/register' element={(<Register />)} />
        <Route path='/forgot-password' element={(<ForgotPassword />)} />

        <Route path='/dashboard' element={(<Index />)} />

        <Route path='/users' element={(<Users />)} />
        <Route path='/user/:id' element={(<User />)} />

        <Route path='/orders' element={(<Orders />)} />
        <Route path='/order/:id' element={(<Order />)} />

        <Route path='/themes' element={(<Themes />)} />
        <Route path='/theme/:id' element={(<Theme />)} />
        <Route path='/create-template' element={(<CreateTemplate />)} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;