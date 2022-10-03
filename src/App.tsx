import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Index from './pages/Index';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={(<Index />)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;