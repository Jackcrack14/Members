import React from 'react';
import '../App.css';

function Header({ query, handleQuery, handleDeleteMany, selectedIds }) {
  return (
    <div className='header-cont'>
      <div>
        <input
          type='text'
          placeholder='Search'
          value={query}
          onChange={(e) => handleQuery(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() =>handleDeleteMany()}>Delete</button>
      </div>
    </div>
  );
}

export default Header;