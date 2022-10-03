import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/Forgot-Password';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={(<Login />)} />
        <Route path='/register' element={(<Register />)} />
        <Route path='/dashboard' element={(<Index />)} />
        <Route path='/forgot-password' element={(<ForgotPassword />)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;