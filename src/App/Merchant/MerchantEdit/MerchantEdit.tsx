import React, { FC } from 'react';
import uuidv4 from 'uuid/v4';

// Models
import { IMerchantEditProps } from './MerchantEdit.types';

import { IMerchantFormValues } from 'App/Merchant/MerchantForm/MerchantForm.types';
import { MerchantFormContainer } from 'App/Merchant/MerchantForm/MerchantForm.container';

export const MerchantEdit: FC<IMerchantEditProps> = ({ merchant, editMerchant, history: { push } }) => {
  return (
    <MerchantFormContainer
      merchant={merchant}
      onSubmit={(values: IMerchantFormValues) => {
        Promise.resolve(
          editMerchant({
            id: uuidv4(),
            bids: [],
            ...values
          })
        ).then(() => {
          push('/');
        });
      }}
    />
  );
};
