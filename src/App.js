import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, MovieDetail } from './container';

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/:movieId' element={<MovieDetail />}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
