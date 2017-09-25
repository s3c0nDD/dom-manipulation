import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

import List from './List';

const ITEM_COUNT = 100;

export default compose(
    withState('items', 'updateItems', Array.from(Array(ITEM_COUNT).keys())),
    withHandlers({
        removeItem: ({ updateItems }) => itemToDelete =>
            updateItems(items => items.filter(item => item !== itemToDelete))
    })
)(List);
