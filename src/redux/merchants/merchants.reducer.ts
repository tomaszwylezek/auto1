import { handleActions } from 'redux-actions';
import { Reducer } from 'redux';
import { IMerchantsReducer } from 'redux/merchants/merchants.model';
import { ADD_MERCHANT, DELETE_MERCHANT, EDIT_MERCHANT, GET_MERCHANTS } from 'redux/merchants/merchants.actionTypes';
import { IMerchant } from 'model';

const defaultState: IMerchantsReducer = [];

export const merchantsReducer: Reducer<IMerchantsReducer> = handleActions(
  {
    [GET_MERCHANTS]: (state: IMerchantsReducer, { payload }: { payload: IMerchant[] }): IMerchantsReducer => payload,
    [ADD_MERCHANT]: (state: IMerchantsReducer, { payload }: { payload: IMerchant }): IMerchantsReducer => [
      ...state,
      payload
    ],
    [EDIT_MERCHANT]: (state: IMerchantsReducer, { payload }: { payload: IMerchant }): IMerchantsReducer =>
      state.map((merchant: IMerchant): IMerchant => (payload.id !== merchant.id ? merchant : payload)),
    [DELETE_MERCHANT]: (state: IMerchantsReducer, { payload }: { payload: string }): IMerchantsReducer =>
      state.reduce(
        (acc: IMerchant[], merchant: IMerchant): IMerchant[] => (payload !== merchant.id ? [...acc, merchant] : acc),
        []
      )
  },
  defaultState
);
