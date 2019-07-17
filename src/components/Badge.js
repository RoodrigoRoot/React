import React from 'react';

import '../styles/styles.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    
  render() {
    const {firtsname,lastname,jobtittle,twiiter,email} = this.props
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar/?d=identicon"
            alt="Avatar"
          />
          <h1>
           {firtsname} <br /> {lastname}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobtittle}</h3>
          <h3>{email}</h3>
          <div>@{twiiter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;