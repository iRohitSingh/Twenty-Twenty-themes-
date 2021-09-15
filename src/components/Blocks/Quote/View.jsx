import React from 'react';

const View = (props) => {
  return (
    <div className="quote-block">
      <div>
        <p className="quote-block-p">{props.data.title}</p>
        <city className="quote-block-city">{props.data.person}</city>
      </div>
    </div>
  );
};

export default View;
