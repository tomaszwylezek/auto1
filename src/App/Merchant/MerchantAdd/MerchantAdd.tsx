import React, { FC } from 'react';
import uuidv4 from 'uuid/v4';

// Models
import { IMerchantAddProps } from './MerchantAdd.types';

import { IMerchantFormValues } from 'App/Merchant/MerchantForm/MerchantForm.types';
import { MerchantFormContainer } from 'App/Merchant/MerchantForm/MerchantForm.container';
import { Button } from 'shared/Button/Button';
import { ButtonTheme } from 'model';

const generateBid = () =>
  Array(Math.floor(Math.random() * 3 + 1))
    .fill(0)
    .map(() => ({
      id: uuidv4(),
      created: new Date(
        +new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)') -
          Math.floor(Math.random() * 1000000)
      ).toString(),
      amount: Math.floor(Math.random() * 235) + 1,
      carTitle: 'Toyota ' + Math.floor(Math.random() * 10)
    }));

export const MerchantAdd: FC<IMerchantAddProps> = ({ addMerchant, history: { push } }) => {
  return (
    <section>
      <Button theme={ButtonTheme.outlineInfo} to="/">
        Back
      </Button>
      <h2>Add merchant</h2>
      <MerchantFormContainer
        onSubmit={(values: IMerchantFormValues) => {
          Promise.resolve(
            addMerchant({
              id: uuidv4(),
              bids: generateBid(),
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
