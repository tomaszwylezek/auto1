import { connect } from 'react-redux';
import { addMerchant } from 'redux/merchants/merchants.actions';
import { MerchantAdd } from './MerchantAdd';

import { IMerchantAddConnectedActions } from './MerchantAdd.types';

const mapDispatchToProps: IMerchantAddConnectedActions = {
  addMerchant
};

export const MerchantAddContainer = connect(
  null,
  mapDispatchToProps
)(MerchantAdd);
