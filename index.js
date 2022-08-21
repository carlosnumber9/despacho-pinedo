import {
  showSection,
  addSectionButtonsHandlers,
  SECTIONS,
} from "./js/sections.js";
import { PUBLIC_KEY } from "./js/email.js";

document.addEventListener("DOMContentLoaded", function () {
  showSection(SECTIONS[0]);
  addSectionButtonsHandlers();
  emailjs.init(PUBLIC_KEY);
});
