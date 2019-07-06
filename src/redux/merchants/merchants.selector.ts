import { createSelector } from 'reselect';
import { IMerchant, IStoreState } from 'model';

export const getMerchants = createSelector<IStoreState, IMerchant[], IMerchant[]>(
  [(state: IStoreState): IMerchant[] => state.merchants],
  (merchants: IMerchant[]): IMerchant[] => merchants
);
