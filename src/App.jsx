import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotaProvider from "./context/NotaContexts";

import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import Faq from "./pages/Faq";
import AppLayout from "./pages/AppLayout";
import Developer from "./pages/Developer";
import PageNotFound from "./pages/PageNotFound";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <NotaProvider>
      <BrowserRouter basename="/nota">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="features" element={<Features />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="appLayout" element={<AppLayout />} />
          <Route path="Developer" element={<Developer />} />
          <Route path="GetStarted" element={<GetStarted />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </NotaProvider>
  );
}

export default App;
