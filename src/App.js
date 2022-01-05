import "./App.css";
import Main from "./Screens/Main";
import Favorites from "./Screens/Favorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNav from "./HeaderNav";
//import CitySearch from "./Components/CitySearch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
