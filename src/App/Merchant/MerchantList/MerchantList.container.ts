import { connect } from 'react-redux';

import { MerchantList } from './MerchantList';

// Redux
import { deleteMerchant } from 'redux/merchants/merchants.actions';
import { getMerchants } from 'redux/merchants/merchants.selector';

// Models
import { IMerchantListConnectedActions, IMerchantListConnectedState } from './MerchantList.types';

const mapStateToProps = (state): IMerchantListConnectedState => ({
  merchants: getMerchants(state)
});

const mapDispatchToProps: IMerchantListConnectedActions = {
  deleteMerchant
};

export const MerchantListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantList);
