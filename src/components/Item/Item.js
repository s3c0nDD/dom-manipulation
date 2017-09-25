import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id }) => (
    <li
      value={id}
      className="list__item"
    >
        <span>ID: {id}</span>
        <button>Delete me!</button>
    </li>
);

Item.propTypes = {
    id: PropTypes.number.isRequired
};

export default Item;
