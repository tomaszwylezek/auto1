import React, { FC } from 'react';
import { IMerchantFormProps, IMerchantFormValues } from 'App/Merchant/MerchantForm/MerchantForm.types';
import { Field, Form, FormikProps } from 'formik';
import { Input } from 'shared/form/Input/Input';
import { Checkbox } from 'shared/form/Checkbox/Checkbox';
import { Button } from 'shared/Button/Button';

// Models

export const MerchantForm: FC<IMerchantFormProps & FormikProps<IMerchantFormValues>> = ({
  merchant,
  dirty,
  isValid
}) => {
  const isEdit: boolean = !!merchant;
  return (
    <Form className="row">
      <div className="col-12">
        <Field component={Input} required name="firstname" label="First name" />
      </div>
      <div className="col-12">
        <Field component={Input} required name="lastname" label="Last name" />
      </div>
      <div className="col-12">
        <Field component={Input} required name="email" label="Email" />
      </div>
      <div className="col-12">
        <Field component={Input} name="avatarUrl" label="Avatar Url" />
      </div>
      <div className="col-12">
        <Field component={Input} name="phone" label="Phone" />
      </div>
      <div className="col-12">
        <Field component={Checkbox} name="hasPremium" label="Has premium" />
      </div>
      <div className="col-12">
        <Button disabled={!isValid || !dirty} type="submit">
          {isEdit ? 'Edit' : 'Add'}
        </Button>
      </div>
    </Form>
  );
};
