import React, { FC, useState } from 'react';
import { IMerchantListProps } from 'App/Merchant/MerchantList/MerchantList.types';
import { ButtonTheme, IMerchant } from 'model';
import { Button } from 'shared/Button/Button';

// Models

const PER_PAGE: number = 5;

export const MerchantList: FC<IMerchantListProps> = ({ merchants, deleteMerchant }) => {
  const [page, setPage] = useState<number>(1);

  const currentMerchants: IMerchant[] = merchants.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return (
    <div>
      <Button theme={ButtonTheme.success} to="/add">
        Add
      </Button>
      {currentMerchants.map(
        (merchant: IMerchant): JSX.Element => {
          const name: string = `${merchant.firstname} ${merchant.lastname}`;
          const deleteSpecificMerchant: () => void = () => deleteMerchant(merchant.id);
          return (
            <div className="card my-2" key={merchant.id}>
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  {name}

                  <div>
                    <Button theme={ButtonTheme.outlineSecondary} to={`/${merchant.id}`}>
                      Edit
                    </Button>
                    <Button theme={ButtonTheme.danger} onClick={deleteSpecificMerchant}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
              <div className="card-body">{merchant.phone}</div>
            </div>
          );
        }
      )}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => setPage(Math.max(page - 1, 1))}>
              Previous
            </a>
          </li>

          {Array(Math.ceil(merchants.length / 5))
            .fill(0)
            .map((el, i) => (
              <li className="page-item" key={i}>
                <a className="page-link" href="#" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </a>
              </li>
            ))}
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => setPage(Math.min(page + 1, Math.ceil(merchants.length / PER_PAGE)))}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
