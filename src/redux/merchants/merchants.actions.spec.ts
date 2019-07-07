import { getMerchants, deleteMerchant, editMerchant, addMerchant } from 'redux/merchants/merchants.actions';

describe('Merchants actions should', (): void => {
  it('match snapshot for getMerchants action', (): void => {
    expect(getMerchants()).toMatchSnapshot();
  });

  it('match snapshot for deleteMerchant action', (): void => {
    expect(deleteMerchant('123')).toMatchSnapshot();
  });

  it('match snapshot for editMerchant action', (): void => {
    expect(
      editMerchant({
        id: '123',
        bids: [],
        email: 'xyz',
        avatarUrl: '',
        phone: '123',
        lastname: 'foo',
        firstname: 'bar',
        hasPremium: true
      })
    ).toMatchSnapshot();
  });

  it('match snapshot for addMerchant action', (): void => {
    expect(
      addMerchant({
        id: '123',
        bids: [],
        email: 'xyz',
        avatarUrl: '',
        phone: '123',
        lastname: 'foo',
        firstname: 'bar',
        hasPremium: true
      })
    ).toMatchSnapshot();
  });
});
