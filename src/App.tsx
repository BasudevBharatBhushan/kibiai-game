import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Report from "./pages/Report";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
