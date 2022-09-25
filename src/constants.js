import { faBriefcase, faGlasses, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Background, Contact, Present } from './Sections';

export const SECTIONS = {
  PRESENT: {
    path: '/',
    id: 'present-btn',
    icon: faGlasses,
    title: 'Actualidad',
    component: <Present />
  },
  BACKGROUND: {
    path: '/background',
    id: 'background-btn',
    icon: faBriefcase,
    title: 'Trayectoria',
    component: <Background />
  },
  CONTACT: {
    path: '/contact',
    id: 'contact-btn',
    icon: faHandshake,
    title: 'Contacto',
    component: <Contact />
  },
};

export const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
export const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
export const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;