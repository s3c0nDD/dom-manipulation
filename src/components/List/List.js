import React from 'react';
import PropTypes from 'prop-types';

import Item from './../Item';

const List = ({ items, removeItem }) => (
    <ul className="list">
        {items.map((item, idx) =>
            <Item
              id={item}
              key={idx}
              onRemove={removeItem}
            />
        )}
    </ul>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number).isRequired,
    removeItem: PropTypes.func.isRequired
};

export default List;
