import React from 'react';
import UserRow from './UserRow';

export const UserRowList = ({ cardsList, removeRow, updateRow }) => {
  return (
    <div>
      {cardsList.map((card) => {
        return <UserRow {...card} key={card.id} removeRow={removeRow} updateRow={updateRow} />
      })}
    </div>
  );
};
