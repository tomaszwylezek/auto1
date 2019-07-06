import { connect } from 'react-redux';
import { addMerchant } from 'redux/merchants/merchants.actions';
import { MerchantEdit } from './MerchantEdit';

import { getMerchant, getMerchants } from 'redux/merchants/merchants.selector';
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
  editMerchant: addMerchant
};

export const MerchantEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantEdit);
