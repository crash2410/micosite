import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import VideoPlayer from "./components/VideoPlayer";
import NumberPage from "./pages/NumberPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
          <Route path="/numberEnter" element={<NumberPage />} />
      </Routes>
    </>
  );
}

export default App;
