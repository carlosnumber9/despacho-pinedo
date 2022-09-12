import { Link } from 'react-router-dom';

import { SECTIONS } from '../App';

export const ContentList = () => (
  <div id="buttons">
    {Object.values(SECTIONS).map((section) => (
      <Link to={section.path} key={section.id} style={{textDecoration: 'none', color: 'unset'}}>
        <div id={section.id}>
          <h2 className="button btn-text">{section.title}</h2>
          <em className={`fa-solid ${section.icon} fa-xl button btn-icon`}></em>
        </div>
      </Link>
    ))}
  </div>
);
