import { useState, useEffect } from 'react';

export const sectionIsSelected = (section) =>
  section.path === window.location.pathname;

export const scrollToBottom = () =>
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

export const useScrollToBottom = () => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!firstRender) scrollToBottom();
    setFirstRender(false);
  });
};
