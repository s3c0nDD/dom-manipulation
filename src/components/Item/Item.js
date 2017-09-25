import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, onRemove, onColorChange, hasColorChanged }) => (
    <li
      value={id}
      className="list__item"
      style={ hasColorChanged ? { backgroundColor: 'red' } : {}}
      onClick={() => onColorChange(id)}
    >
        <span className="list__item__label">
            ID: {id}
        </span>
        <button
          className="list__item__button"
          onClick={e => {
              e.nativeEvent.stopImmediatePropagation();
              e.stopPropagation();
              onRemove(id)
          }}
        >
            Delete me!
        </button>
    </li>
);

Item.propTypes = {
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    hasColorChanged: PropTypes.bool.isRequired
};

export default Item;
