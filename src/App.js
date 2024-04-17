import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import HomePage from './Pages/HomePage';
import ReactQueryPage from './Pages/ReactQueryPage';

function App() {
  return (
    <div>
      <nav style={{backgroundColor: "beige", padding: "20px"}}>
        <Link to="/" style={{ marginRight: "10px"}}>
          Homepage
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/react-query" element={<ReactQueryPage />}/>
    </Routes>
    </div>
  );
}

export default App;
