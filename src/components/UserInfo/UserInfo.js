import React from 'react';
import './UserInfo.scss'
import { Link } from 'react-router-dom';

const UserInfo = ({ name, quote, ranking }) => {
  return (
    <div className="user-info">
      <h2>{name}</h2>
      <p className="user-info-p">"{quote}"</p>
      <p className="user-info-p">{ranking}</p>
      <Link to='/'>
        <button type='submit' className='button--sign-out'>Sign Out</button>
      </Link>
    </div>
  )
}

export default UserInfo;