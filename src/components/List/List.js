import React from 'react';
import PropTypes from 'prop-types';

import Item from './../Item';

const List = ({ itemCount }) => (
    <ul className="list">
        { [...Array(itemCount)].map((item, idx) => <Item id={idx} key={idx}/>) }
    </ul>
);

List.propTypes = {
    itemCount: PropTypes.number.isRequired
};

export default List;
