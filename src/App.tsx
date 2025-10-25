import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './navigation/Navigation';
import Epics from './epics/Epics';
import Bugs from './bugs/Bugs';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Navigation />
        <Routes>
          <Route path='/epics' element={<Epics />} />
          <Route path='/bugs' element={<Bugs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
