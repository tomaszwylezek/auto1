import { IMerchant } from 'model';

export interface IMerchantFormOwnProps {
  onSubmit: (values: any) => void;
  merchant?: IMerchant;
}

export interface IMerchantFormProps extends IMerchantFormOwnProps {}

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type IMerchantFormValues = Omit<IMerchant, 'bids' | 'id'>;
