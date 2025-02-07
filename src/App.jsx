import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Play from './Routes/Play';
import Footer from './Components/Footer';
import Watch from './Routes/Watch';
function App() {
  return (
     <>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/play/:id" element={<Play />} />
         <Route path="/play/:id/:episode_id" element={<Watch/>} />
       </Routes>
      <Footer />
    </>
  );
}

export default App;
