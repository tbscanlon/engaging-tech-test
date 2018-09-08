import { connect } from 'react-redux';

import { getBundleTotal, getCategoryBreakdown, getBundleSize } from '../../state/bundle/selectors';

import BundleSummary from '../../components/BundleSummary/BundleSummary';

const mapStateToProps = state => ({
  total: getBundleTotal(state),
  breakdown: getCategoryBreakdown(state),
  numberOfItems: getBundleSize(state)
});

export default connect(mapStateToProps)(BundleSummary);