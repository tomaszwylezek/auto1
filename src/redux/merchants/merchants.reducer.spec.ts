import { merchantsReducer } from 'redux/merchants/merchants.reducer';

describe('Merchants reducer', (): void => {
  it('initialize', (): void => {
    expect(
      merchantsReducer(undefined, {
        type: ''
      })
    ).toMatchSnapshot();
  });
});
