import "./App.css";
import BankAccount from "./Components/BankAccount";
import Counter from "./Components/Counters";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Dasdboard from "./Pages/Dasdboard";
import Nav from "./Components/Nav";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import PageNotFound from "./Pages/PageNotFound";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <BankAccount /> */}

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/dashboard" element={<Dasdboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
