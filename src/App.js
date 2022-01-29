import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './Login';
import LoginInfo from "./LoginInfo";
function App() {
  return (
<Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<LoginInfo/>}/>
  </Routes>
  </Router>
  );
}

export default App;
