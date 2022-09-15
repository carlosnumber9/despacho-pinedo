import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { SECTIONS } from '../constants';

export const ContentList = () => (
  <div id="buttons">
    {Object.values(SECTIONS).map((section) => (
      <Link
        to={section.path}
        key={section.id}
        style={{ textDecoration: 'none', color: 'unset' }}
      >
        {useMediaQuery('(min-width:600px)') ? (
          <div id={section.id}>
            <h2 className="button btn-text">{section.title}</h2>
            <em
              className={`fa-solid ${section.icon} fa-xl button btn-icon`}
            ></em>
          </div>
        ) : (
          <div id={section.id}>
            <FontAwesomeIcon icon={section.icon} size={'3x'} />
          </div>
        )}
      </Link>
    ))}
  </div>
);
