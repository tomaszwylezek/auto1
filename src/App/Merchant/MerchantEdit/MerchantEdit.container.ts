import { connect } from 'react-redux';

import { MerchantEdit } from './MerchantEdit';

// Redux
import { editMerchant } from 'redux/merchants/merchants.actions';
import { getMerchant } from 'redux/merchants/merchants.selector';

// Models
import {
  IMerchantEditConnectedActions,
  IMerchantEditConnectedState,
  IMerchantEditProps
} from 'App/Merchant/MerchantEdit/MerchantEdit.types';

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }: IMerchantEditProps
): IMerchantEditConnectedState => ({
  merchant: getMerchant(state, id)
});

const mapDispatchToProps: IMerchantEditConnectedActions = {
  editMerchant
};

export const MerchantEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantEdit);
