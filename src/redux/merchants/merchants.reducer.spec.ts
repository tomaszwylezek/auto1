import { merchantsReducer } from 'redux/merchants/merchants.reducer';
import { addMerchant, deleteMerchant, editMerchant, getMerchants } from 'redux/merchants/merchants.actions';

describe('Merchants reducer should', (): void => {
  it('initialize', (): void => {
    expect(
      merchantsReducer(undefined, {
        type: ''
      })
    ).toMatchSnapshot();
  });

  it('react on ADD_MERCHANT action', (): void => {
    expect(
      merchantsReducer(
        [],
        addMerchant({
          id: '2',
          firstname: 'Grzegorz',
          lastname: 'Wylezek',
          avatarUrl: '',
          email: 'xyz2@gmail.com',
          phone: '665-555-555',
          hasPremium: true,
          bids: [
            {
              id: '3',
              amount: 12,
              carTitle: 'Toyota',
              created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
            }
          ]
        })
      )
    ).toMatchSnapshot();
  });

  it('react on DELETE_MERCHANT action', (): void => {
    expect(
      merchantsReducer(
        [
          {
            id: '2',
            firstname: 'Grzegorz',
            lastname: 'Wylezek',
            avatarUrl: '',
            email: 'xyz2@gmail.com',
            phone: '665-555-555',
            hasPremium: true,
            bids: [
              {
                id: '3',
                amount: 12,
                carTitle: 'Toyota',
                created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
              }
            ]
          }
        ],
        deleteMerchant('2')
      )
    ).toMatchSnapshot();
  });

  it('react on EDIT_MERCHANT action', (): void => {
    expect(
      merchantsReducer(
        [
          {
            id: '2',
            firstname: 'Grzegorz',
            lastname: 'Wylezek',
            avatarUrl: '',
            email: 'xyz2@gmail.com',
            phone: '665-555-555',
            hasPremium: true,
            bids: [
              {
                id: '3',
                amount: 12,
                carTitle: 'Toyota',
                created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
              }
            ]
          }
        ],
        editMerchant({
          id: '2',
          firstname: 'Tomasz',
          lastname: 'Wylezek',
          avatarUrl: '',
          email: 'xyz2@gmail.com',
          phone: '665-555-555',
          hasPremium: true,
          bids: [
            {
              id: '3',
              amount: 12,
              carTitle: 'Toyota',
              created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
            }
          ]
        })
      )
    ).toMatchSnapshot();
  });

  it('react on GET_MERCHANTS action', (): void => {
    expect(merchantsReducer([], getMerchants())).toMatchSnapshot();
  });
});
