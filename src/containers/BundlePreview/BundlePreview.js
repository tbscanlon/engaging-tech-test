import { connect } from 'react-redux';

import { actions } from '../../state/bundle/actions'
import { getBundle } from '../../state/bundle/selectors';

import BundlePreview from '../../components/BundlePreview/BundlePreview';

const mapStateToProps = state => ({
  items: getBundle(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick: itemId => dispatch(actions.remove(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BundlePreview);