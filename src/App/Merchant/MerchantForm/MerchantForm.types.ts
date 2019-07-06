import { IMerchant } from 'model';
import { FormikProps } from 'formik';

export interface IMerchantFormOwnProps {
  onSubmit: (values: any) => void;
  merchant?: IMerchant;
}

export interface IMerchantFormProps extends IMerchantFormOwnProps {}

export type IMerchantFormValues = Omit<IMerchant, 'bids' | 'id'>;
