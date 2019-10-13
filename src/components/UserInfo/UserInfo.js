import React from 'react';

const UserInfo = ({ name, quote, ranking }) => {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Quote: {quote}</p>
      <p>Ranking: {ranking}</p>
      <button>Sign Out</button>
    </>
  )
}

export default UserInfo;