//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import LoginObj from './components/Login';
import Records from './components/records';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tweets" element={<Tweet/>} />
            <Route path="/records" element={<Records/>} />
            <Route path="/login" element={<LoginObj.Login/>} />
            <Route path="login/signin" element={<LoginObj.Signin/>} />
            <Route path="login/signup" element={<LoginObj.Signup/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;