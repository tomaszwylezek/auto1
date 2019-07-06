import React, { FC } from 'react';
import { uuidv4 } from 'uuid';

// Models
import { IMerchantAddProps } from './MerchantAdd.types';

import { IMerchantFormValues } from 'App/Merchant/MerchantForm/MerchantForm.types';
import { MerchantFormContainer } from 'App/Merchant/MerchantForm/MerchantForm.container';

export const MerchantAdd: FC<IMerchantAddProps> = ({ addMerchant }) => {
  return (
    <MerchantFormContainer
      onSubmit={(values: IMerchantFormValues) => {
        addMerchant({
          id: uuidv4(),
          bids: [],
          ...values
        });
      }}
    />
  );
};
