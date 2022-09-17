import { faBriefcase, faGlasses, faHandshake } from '@fortawesome/free-solid-svg-icons';

export const SECTIONS = {
  PRESENT: {
    path: '/',
    id: 'present-btn',
    icon: faGlasses,
    title: 'Actualidad',
  },
  BACKGROUND: {
    path: '/background',
    id: 'background-btn',
    icon: faBriefcase,
    title: 'Trayectoria',
  },
  CONTACT: {
    path: '/contact',
    id: 'contact-btn',
    icon: faHandshake,
    title: 'Contacto',
  },
};

export const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
export const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
export const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;