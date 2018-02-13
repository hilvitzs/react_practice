import React from 'react';

export const Footer = ({ addRow }) => {
  return (
    <div>
      <button onClick={() => addRow()}>Add Another UserDataSet</button>
      <button>Cancel</button>
      <button>Generate User</button>
    </div>
  );
};
