import { IBid } from 'model';

export interface IMerchantDetailsOwnProps {
  id: string;
  name: string;
  phone?: string;
  onDeleteClick: () => void;
  bids: IBid[];
}

export interface IMerchantDetailsConnectedState {}

export interface IMerchantDetailsConnectedActions {}

export interface IMerchantDetailsProps
  extends IMerchantDetailsConnectedState,
    IMerchantDetailsConnectedActions,
    IMerchantDetailsOwnProps {}

export interface IMerchantDetailsState {}
