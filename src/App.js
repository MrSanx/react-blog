// Importa los modulos necesarios de react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
// Importa los componentes de BlogList, BlogPost y Navbar
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Navbar from './Navbar';
import BlogFavorites from './BlogFavorites';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<BlogList />} />
          <Route path="/blogpost/:id" element={<BlogPost />} />
          <Route path="/bloglist/:id" element={<BlogList />} />
          <Route path="/blogFavorites" element={<BlogFavorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;