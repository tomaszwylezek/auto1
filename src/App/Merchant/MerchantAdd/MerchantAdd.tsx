import React, { FC } from 'react';
import uuidv4 from 'uuid/v4';

// Models
import { IMerchantAddProps } from './MerchantAdd.types';

import { IMerchantFormValues } from 'App/Merchant/MerchantForm/MerchantForm.types';
import { MerchantFormContainer } from 'App/Merchant/MerchantForm/MerchantForm.container';

export const MerchantAdd: FC<IMerchantAddProps> = ({ addMerchant, history: { push } }) => {
  return (
    <MerchantFormContainer
      onSubmit={(values: IMerchantFormValues) => {
        Promise.resolve(
          addMerchant({
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