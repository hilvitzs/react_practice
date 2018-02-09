import React from 'react';
import UserRow from './UserRow';

export const UserRowList = ({ cardsList, removeRow, updateRow }) => {
  return (
    <div>
      {cardsList.map((card, index) => {
        return <UserRow {...card} key={index} removeRow={removeRow} updateRow={updateRow} />
      })}
    </div>
  )
}
