import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Blog from './Blog';
import PostId from './PostId';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/UserProfile/:name" element={<UserProfile />} />
        <Route path='Blog'>
          <Route index element={<Blog />} />
          <Route path='PostId' element={<PostId />} />
        </Route>
        <Route path="/*" element={<h2>No Page Found</h2>} />


      </Routes>
      <Navigation />
    </>
  );
}

export default App;
