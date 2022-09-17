import './personal-info.css';

export const PersonalInfo = () => (
  <div id="personal-info" className="div-default">
    <div id="numbers">
      <div id="home-number">
        <a href="tel:913117423"> Fijo: 913117423 </a>
      </div>
      <div id="mobile-number">
        <a href="tel:609125466"> Móvil: 609125466 </a>
      </div>
      <div id="fax-number">
        <a href="fax:912184195"> Fax: 912184195 </a>
      </div>
    </div>
    <div id="email-text">
      <a href="mailto:carpinsan@telefonica.net">carpinsan@telefonica.net</a>
    </div>
    <div id="address">
      <a href="https://goo.gl/maps/LDazUNYaT9mMvfpXA" target="_blank" rel="noreferrer">
        C/Rueza 36, 6ºB. 28011 Madrid
      </a>
    </div>
  </div>
);
