import { IMerchant } from 'model';

export interface IMerchantFormOwnProps {
  onSubmit: (values: any) => void;
  merchant?: IMerchant;
}

export interface IMerchantFormProps extends IMerchantFormOwnProps {}

export type IMerchantFormValues = Omit<IMerchant, 'bids' | 'id'>;
