import { IMerchant } from 'model';

export interface IMerchantAddOwnProps {}

export interface IMerchantAddConnectedState {}

export interface IMerchantAddConnectedActions {
  addMerchant: (merchant: IMerchant) => void
}

export interface IMerchantAddProps extends IMerchantAddConnectedState, IMerchantAddConnectedActions, IMerchantAddOwnProps {}

export interface IMerchantAddState {}

