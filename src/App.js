import './index.css';
import { ContentList } from './ContentList/ContentList';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { Background, Present, Contact } from './Sections';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as emailJS from '@emailjs/browser';

export const SECTIONS = {
  PRESENT: {
    path: '/',
    id: 'present-btn',
    icon: 'fa-glasses',
    title: 'Actualidad',
  },
  BACKGROUND: {
    path: '/background',
    id: 'background-btn',
    icon: 'fa-briefcase',
    title: 'Trayectoria',
  },
  CONTACT: {
    path: '/contact',
    id: 'contact-btn',
    icon: 'fa-handshake',
    title: 'Contacto',
  },
};

function App() {
  emailJS.init(process.env.PUBLIC_KEY);
  return (
    <div className="App">
      <div id="main">
        <h1 id="name-title">Carlos Pinedo Santamaría</h1>
        <h2 id="subtitle">Abogado</h2>
        <div id="content">
          <PersonalInfo></PersonalInfo>
          <Router>
            <ContentList></ContentList>
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  exact
                  path={SECTIONS.PRESENT.path}
                  element={<Present />}
                ></Route>
                <Route
                  exact
                  path={SECTIONS.BACKGROUND.path}
                  element={<Background />}
                ></Route>
                <Route
                  exact
                  path={SECTIONS.CONTACT.path}
                  element={<Contact />}
                ></Route>
              </Routes>
            </AnimatePresence>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
