import React from 'react';
import Chooser from 'rc-chooser';

export default () => {
  const divs = Array.from({ length: 40 }, (_, index) => <div key={index}>Div {index + 1}</div>);
  return (
    <div style={{ margin: 20 }}>
      <Chooser>{divs}</Chooser>
    </div>
  );
};
