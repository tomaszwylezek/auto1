import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Bid.module.scss';

// Models
import { IBidProps } from 'App/Merchant/MerchantDetails/Bid/Bid.types';

export const Bid: FC<IBidProps> = ({ id, carTitle, amount, created }) => {
  return (
    <div className={classNames('card text-white bg-secondary mb-3 mr-2 ', styles.bid)}>
      <div className="card-header py-1 px-3">{id}</div>
      <div className="card-body p-3">
        <h5 className="card-title">
          {carTitle} - {amount}
          $$
        </h5>
        <p className="card-text">Created: {created}</p>
      </div>
    </div>
  );
};
