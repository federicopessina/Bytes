import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
// import { About } from './pages/About';

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App
