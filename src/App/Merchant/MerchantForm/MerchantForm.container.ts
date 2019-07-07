import * as Yup from 'yup';
import { MerchantForm } from './MerchantForm';

import { FormikBag, withFormik } from 'formik';
import { IMerchantFormProps, IMerchantFormValues } from 'App/Merchant/MerchantForm/MerchantForm.types';
import { IMerchant } from 'model';
import { compose } from 'redux';

const initialFormValues: IMerchantFormValues = {
  firstname: '',
  lastname: '',
  phone: '',
  avatarUrl: '',
  email: '',
  hasPremium: false
};

const getMerchantValues: (area: IMerchant) => IMerchantFormValues = ({
  firstname,
  lastname,
  phone,
  avatarUrl,
  email,
  hasPremium
}: IMerchant): IMerchantFormValues => ({
  firstname,
  lastname,
  phone,
  avatarUrl,
  email,
  hasPremium
});

export const MerchantFormContainer = compose(
  withFormik<IMerchantFormProps, IMerchantFormValues>({
    displayName: 'MerchantFormContainer',
    handleSubmit: (
      values: IMerchantFormValues,
      { props: { onSubmit } }: FormikBag<IMerchantFormProps, IMerchantFormValues>
    ): void => onSubmit(values),
    mapPropsToValues: ({ merchant }) => (merchant ? getMerchantValues(merchant) : initialFormValues),
    validationSchema: () =>
      Yup.object().shape<Partial<IMerchantFormValues>>({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        email: Yup.string().email()
      })
  })
)(MerchantForm);
