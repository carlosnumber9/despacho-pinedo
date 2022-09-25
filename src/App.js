import './index.css';
import { ContentList } from './ContentList';
import { PersonalInfo } from './PersonalInfo';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as emailJS from '@emailjs/browser';
import { PUBLIC_KEY, SECTIONS } from './constants';
import { BackgroundBars } from './BackgroundBars';
import { InitialTransition } from './InitialTransition/InitialTransition';
import { Title } from './Title';

function App() {
  emailJS.init(PUBLIC_KEY);

  return (
    <div className="App">
      <InitialTransition />
      <BackgroundBars />
      <div id="main">
        <Title />
        <div id="content">
          <PersonalInfo></PersonalInfo>
          <Router>
            <ContentList></ContentList>
            <AnimatePresence mode="wait">
              <Routes>
                {Object.values(SECTIONS).map((section) => (
                  <Route
                    key={section.path}
                    exact
                    path={section.path}
                    element={section.component}
                  />
                ))}
              </Routes>
            </AnimatePresence>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
