import { getMerchants } from 'redux/merchants/merchants.actions';

describe('Merchants actions', (): void => {
  it('calls getMerchants', (): void => {
    expect(getMerchants()).toMatchSnapshot();
  });
});
