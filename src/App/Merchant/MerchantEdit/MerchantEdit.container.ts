import { connect } from 'react-redux';
import { editMerchant } from 'redux/merchants/merchants.actions';
import { MerchantEdit } from './MerchantEdit';

import { getMerchant } from 'redux/merchants/merchants.selector';
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
