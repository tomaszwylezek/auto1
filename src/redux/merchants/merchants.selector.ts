import { createSelector } from 'reselect';
import { IMerchant, IStoreState } from 'model';

export const getMerchants = createSelector<IStoreState, IMerchant[], IMerchant[]>(
  [(state: IStoreState): IMerchant[] => state.merchants],
  (merchants: IMerchant[]): IMerchant[] => merchants
);

export const getMerchant = createSelector<IStoreState, string, IMerchant[], string, IMerchant>(
  getMerchants,
  (_: IStoreState, id: string): string => id,
  (merchants: IMerchant[], id: string): IMerchant =>
    merchants.find(({ id: merchantId }: IMerchant) => id === merchantId)
);
