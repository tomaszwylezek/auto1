import React, { FC } from 'react';
import { IMerchantListProps } from 'App/Merchant/MerchantList/MerchantList.types';
import { IMerchant } from 'model';
import { Link } from 'react-router-dom';

// Models

export const MerchantList: FC<IMerchantListProps> = ({ merchants }) => {
  return (
    <div>
      {merchants.map(
        (merchant: IMerchant): JSX.Element => {
          const name: string = `${merchant.firstname} ${merchant.lastname}`;
          return (
            <div className="card" key={merchant.id}>
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  {name}

                  <div>
                    <Link to={`/${merchant.id}`}>Edit</Link>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
              <div className="card-body">{merchant.phone}</div>
            </div>
          );
        }
      )}
      <Link to="/add">Add</Link>
    </div>
  );
};
