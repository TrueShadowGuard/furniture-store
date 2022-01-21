import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
