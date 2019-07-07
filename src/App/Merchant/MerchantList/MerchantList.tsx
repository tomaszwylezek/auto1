import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { IMerchantListProps } from 'App/Merchant/MerchantList/MerchantList.types';
import { ButtonTheme, IMerchant } from 'model';
import { Button } from 'shared/Button/Button';

import styles from './MerchantList.module.scss';
import { MerchantDetails } from 'App/Merchant/MerchantDetails/MerchantDetails';
// Models

const PER_PAGE: number = 5;

export const MerchantList: FC<IMerchantListProps> = ({ merchants, deleteMerchant }): JSX.Element => {
  const [page, setPaginationPage] = useState<number>(1);

  const setPage = (page: number) => {
    setPaginationPage(page);
    window.scrollTo(0, 0);
  };

  const currentMerchants: IMerchant[] = merchants.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section>
      <Button theme={ButtonTheme.success} to="/add">
        Add
      </Button>
      {currentMerchants.map(
        (merchant: IMerchant): JSX.Element => {
          const name: string = `${merchant.firstname} ${merchant.lastname}`;
          const deleteSpecificMerchant: () => void = () => deleteMerchant(merchant.id);
          return (
            <MerchantDetails
              key={merchant.id}
              id={merchant.id}
              name={name}
              bids={merchant.bids}
              phone={merchant.phone}
              onDeleteClick={deleteSpecificMerchant}
            />
          );
        }
      )}
      <nav className="d-flex justify-content-center">
        <ul className={classNames('pagination', styles.pagination)}>
          <li className="page-item">
            <span className="page-link" onClick={() => setPage(Math.max(page - 1, 1))}>
              Previous
            </span>
          </li>

          {Array(Math.ceil(merchants.length / 5))
            .fill(0)
            .map((el, i) => (
              <li className="page-item" key={i}>
                <span className="page-link" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </span>
              </li>
            ))}

          <li className="page-item">
            <span
              className="page-link"
              onClick={() => setPage(Math.min(page + 1, Math.ceil(merchants.length / PER_PAGE)))}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    </section>
  );
};
