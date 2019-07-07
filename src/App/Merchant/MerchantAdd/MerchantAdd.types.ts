import { IMerchant } from 'model';
import { RouteComponentProps } from 'react-router';

export interface IMerchantAddConnectedActions {
  addMerchant: (merchant: IMerchant) => void;
}

export interface IMerchantAddProps extends RouteComponentProps, IMerchantAddConnectedActions {}
