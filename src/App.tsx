import { Route, Routes } from 'react-router-dom';
import './App.css';
import HireMe from './Screens/HireMe/hireme';
import Home from './Screens/Home';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hireme" element={<HireMe />} />
    </Routes>
  );
}

export default App;
