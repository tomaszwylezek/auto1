import React, { FC } from 'react';
import { IMerchantDetailsProps } from 'App/Merchant/MerchantDetails/MerchantDetails.types';
import { Button } from 'shared/Button/Button';
import { ButtonTheme } from 'model';

// Models

export const MerchantDetails: FC<IMerchantDetailsProps> = ({ id, phone, name, onDeleteClick }) => (
  <div className="card my-2" key={id}>
    <div className="card-header">
      <div className="d-flex justify-content-between">
        {name}

        <div>
          <Button theme={ButtonTheme.outlineSecondary} to={`/${id}`}>
            Edit
          </Button>
          <Button theme={ButtonTheme.danger} onClick={onDeleteClick}>
            Delete
          </Button>
        </div>
      </div>
    </div>
    <div className="card-body">{phone}</div>
  </div>
);
