import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Switch は Routes に変更
import Top from "./pages/Top";
import News from "./pages/News";
import ScheduleAndTicket from "./pages/ScheduleAndTicket";
import Access from "./pages/Access";
import About from "./pages/About";
import Popup from "./components/Popup"; // Popupコンポーネントをインポート

function App() {
  return (
    <BrowserRouter> {/* RouterはBrowserRouterに変更 */}
      <Header />
      <div className="app-container">{}
        <Routes> 
          <Route path="/" element={<Top />} /> componentをelementに変更
          <Route path="/news" element={<News />} />
          <Route path="/schedule" element={<ScheduleAndTicket />} />
          <Route path="/access" element={<Access />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Popup />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
