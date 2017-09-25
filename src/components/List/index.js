import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

import List from './List';

const ITEM_COUNT = 10;
const makeArray = (arg) => Array.from(Array(arg).keys()).map(i => [i, false]);

export default compose(
    withState('items', 'updateItems', makeArray(ITEM_COUNT)),
    withHandlers({
        removeItem: ({ updateItems }) => itemToDelete =>
            updateItems(items => items.filter(item => item[0] !== itemToDelete)),
        changeColor: ({ updateItems }) => itemToChange =>
            updateItems(items => items.map(item => item[0] !== itemToChange ? item : [item[0], !item[1]]))
    })
)(List);
