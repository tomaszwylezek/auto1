import { IMerchant } from 'model';
import { RouteComponentProps } from 'react-router';

export interface IMerchantEditOwnProps {}

export interface IMerchantEditConnectedState {
  merchant: IMerchant;
}

export interface IMerchantEditConnectedActions {
  editMerchant: (merchant: IMerchant) => void;
}

export interface IMerchantEditProps
  extends RouteComponentProps<{ id: string }>,
    IMerchantEditConnectedState,
    IMerchantEditConnectedActions,
    IMerchantEditOwnProps {}
