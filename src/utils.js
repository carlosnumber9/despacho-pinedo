export const sectionIsSelected = (section) => section.path === window.location.pathname;

export const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
