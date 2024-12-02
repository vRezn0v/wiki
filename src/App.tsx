import CommunityLinks from "./components/mkin/CommunityLinks";
import ComingSoon from "./components/mkin/ComingSoon";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </div>
  );
}

export default App;
