import React from 'react';

const OptionComponents = props => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default OptionComponents;