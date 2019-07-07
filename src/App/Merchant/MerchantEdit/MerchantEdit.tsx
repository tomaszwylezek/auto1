import React, { FC } from 'react';
// Models
import { IMerchantEditProps } from './MerchantEdit.types';

import { IMerchantFormValues } from 'App/Merchant/MerchantForm/MerchantForm.types';
import { MerchantFormContainer } from 'App/Merchant/MerchantForm/MerchantForm.container';
import { Button } from 'shared/Button/Button';
import { ButtonTheme } from 'model';

export const MerchantEdit: FC<IMerchantEditProps> = ({ merchant, editMerchant, history: { push } }) => {
  return (
    <section>
      <Button theme={ButtonTheme.outlineInfo} to="/">
        Back
      </Button>
      <h2>
        Edit merchant {merchant.firstname} {merchant.lastname}
      </h2>
      <MerchantFormContainer
        merchant={merchant}
        onSubmit={(values: IMerchantFormValues) => {
          Promise.resolve(
            editMerchant({
              ...merchant,
              ...values
            })
          ).then(() => {
            push('/');
          });
        }}
      />
    </section>
  );
};
