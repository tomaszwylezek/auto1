import React, { FC } from 'react';

// Features
import { Button } from 'shared/Button/Button';
import { Bid } from 'App/Merchant/MerchantDetails/Bid/Bid';

// Models
import { IMerchantDetailsProps } from 'App/Merchant/MerchantDetails/MerchantDetails.types';
import { ButtonTheme, IBid, Size } from 'model';

export const MerchantDetails: FC<IMerchantDetailsProps> = ({ id, phone, name, bids, onDeleteClick }): JSX.Element => (
  <div className="card my-2" key={id}>
    <div className="card-header py-1 px-3">
      <div className="d-flex justify-content-between">
        {name}

        <div>
          <Button theme={ButtonTheme.outlineSecondary} size={Size.sm} to={`/${id}`} className="mr-2">
            Edit
          </Button>
          <Button theme={ButtonTheme.danger} size={Size.sm} onClick={onDeleteClick}>
            Delete
          </Button>
        </div>
      </div>
    </div>
    <div className="card-body p-2">
      <div>Contact: {phone}</div>
      <div className="d-flex">
        {bids
          .sort((a: IBid, b: IBid): number => +new Date(b.created) - +new Date(a.created))
          .map(({ carTitle, id, amount, created }: IBid) => (
            <Bid key={id} id={id} amount={amount} carTitle={carTitle} created={created} />
          ))}
      </div>
    </div>
  </div>
);
