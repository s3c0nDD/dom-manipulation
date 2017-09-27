import React from 'react';
import PropTypes from 'prop-types';

import Item from './../Item';

const noop = () => {};

const List = ({ items, removeItem, changeColor }) => (
    <ul className="list">
        {items.map((item, idx) =>
            <Item
              key={idx}
              id={item[0]}
              hasColorChanged={item[1]}
              onRemove={removeItem}
              onColorChange={(idx % 3) ? noop : changeColor}
            />
        )}
    </ul>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.array).isRequired,
    removeItem: PropTypes.func.isRequired,
    changeColor: PropTypes.func.isRequired
};

export default List;
