import { handleActions } from 'redux-actions';
import { Reducer } from 'redux';
import { IMerchantsReducer } from 'redux/merchants/merchants.model';
import { ADD_MERCHANT, GET_MERCHANTS } from 'redux/merchants/merchants.actionTypes';
import { IMerchant } from 'model';

const defaultState: IMerchantsReducer = [];

export const merchantsReducer: Reducer<IMerchantsReducer> = handleActions(
  {
    [GET_MERCHANTS]: (state: IMerchantsReducer, { payload }: { payload: IMerchant[] }): IMerchantsReducer => payload,
    [ADD_MERCHANT]: (state: IMerchantsReducer, { payload }: { payload: IMerchant }): IMerchantsReducer => [
      ...state,
      payload
    ],
  },
  defaultState
);
