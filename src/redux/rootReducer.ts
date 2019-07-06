import { combineReducers } from 'redux';
import { IStoreState } from 'model';
import { merchantsReducer } from 'redux/merchants/merchants.reducer';

export default () =>
  combineReducers<IStoreState>({
    merchants: merchantsReducer
  });
