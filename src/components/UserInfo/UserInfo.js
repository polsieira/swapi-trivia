import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ name, quote, ranking }) => {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Quote: {quote}</p>
      <p>Ranking: {ranking}</p>
      <Link to='/'>
        <button type='submit' className='button--sign-out'>Sign Out</button>
      </Link>
    </>
  )
}

export default UserInfo;