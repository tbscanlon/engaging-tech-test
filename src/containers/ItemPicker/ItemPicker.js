import { connect } from 'react-redux';

import { actions } from '../../state/bundle/actions'
import { getItems } from '../../state/bundle/selectors';

import ItemPicker from '../../components/ItemPicker/ItemPicker';

const mapStateToProps = state => ({
  items: getItems(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick: itemId => dispatch(actions.add(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPicker);