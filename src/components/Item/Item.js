import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, onRemove }) => (
    <li
      value={id}
      className="list__item"
    >
        <span className="list__item__label">ID: {id}</span>
        <button
          className="list__item__button"
          onClick={() => onRemove(id)}
        >Delete me!</button>
    </li>
);

Item.propTypes = {
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default Item;
