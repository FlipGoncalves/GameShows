import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jeopardy from './components/Jeopardy/Jeopardy';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarGame from './components/Shared/NavbarGame/NavbarGame.tsx';
import FooterGame from './components/Shared/FooterGame/FooterGame.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <NavbarGame></NavbarGame>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jeopardy" element={<Jeopardy />} />
      </Routes>
    </BrowserRouter>
    <FooterGame></FooterGame>
  </>
)
