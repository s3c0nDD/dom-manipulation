import withProps from 'recompose/withProps';

import List from './List';

export default withProps({ itemCount: 10 })(List);