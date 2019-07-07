export interface IMerchantDetailsOwnProps {
  id: string;
  name: string;
  phone?: string;
  onDeleteClick: () => void;
}

export interface IMerchantDetailsConnectedState {}

export interface IMerchantDetailsConnectedActions {}

export interface IMerchantDetailsProps
  extends IMerchantDetailsConnectedState,
    IMerchantDetailsConnectedActions,
    IMerchantDetailsOwnProps {}

export interface IMerchantDetailsState {}
