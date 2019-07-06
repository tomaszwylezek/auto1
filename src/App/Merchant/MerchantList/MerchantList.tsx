import React, { FC } from 'react';
import { IMerchantListProps } from 'App/Merchant/MerchantList/MerchantList.types';
import { IMerchant } from 'model';

// Models

export const MerchantList: FC<IMerchantListProps> = ({ merchants }) => {
  return (
    <div>
      {merchants.map(
        (merchant: IMerchant): JSX.Element => {
          const name: string = `${merchant.firstname} ${merchant.lastname}`;
          return (
            <div className="card" key={merchant.id}>
              <div className="card-header">{name}</div>
              <div className="card-body">{merchant.phone}</div>
            </div>
          );
        }
      )}
    </div>
  );
};
