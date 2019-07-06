import { IMerchant } from 'model';

export interface IMerchantListOwnProps {}

export interface IMerchantListConnectedState {
  merchants: IMerchant[];
}

export interface IMerchantListConnectedActions {}

export interface IMerchantListProps
  extends IMerchantListConnectedState,
    IMerchantListConnectedActions,
    IMerchantListOwnProps {}

export interface IMerchantListState {}
