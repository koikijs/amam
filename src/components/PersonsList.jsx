import React, { PropTypes } from 'react';
import FlagIconFactory from 'react-flag-icon-css';

const styles = require('../css/persons-list.less');

const FlagIcon = FlagIconFactory(React);
const PersonsList = props =>
  <div className={styles.persons} >
    <table>
      <thead>
        <tr>
          <th colSpan="2">Location</th>
          <th colSpan="2" />
        </tr>
      </thead>
      <tbody>
        {
          props.items.map(person =>
            <tr key={person.id} className={styles.person}>
              <td>
                <FlagIcon code={person.countryCode} size="2x" />
              </td>
              <td className={styles.city}>{person.cityCode}</td>
              <td>
                {
                  /*
                  <svg
                    id="waterMark"
                    className="waterMark available"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160 160"
                  >
                    <title>waterMark</title>
                    <circle cx="81.27" cy="51.72" r="47.37" />
                    <path
                      d="M9.44,155H151.5c-1.29-23.18-9.23-46.35-35-60.94-24.89,
                      17.17-48.5,16.31-71.25,0C21.67,105.21,11.8,131,9.44,155Z"
                    />
                  </svg>
                  */
                }
              </td>
              <td>
                <p className={styles.name}>{person.name}</p>
                {
                  person.tags.map(tag =>
                    <p key={tag.id} className={styles.tags}>{tag.name}</p>
                  )
                }
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>;

PersonsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PersonsList;
