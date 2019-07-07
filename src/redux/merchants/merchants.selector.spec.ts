import { areMerchantsLoaded, getMerchant, getMerchants } from 'redux/merchants/merchants.selector';
import { IMerchant } from 'model';

describe('Merchants selectors should', (): void => {
  it('match snapshot for getMerchants selector', (): void => {
    expect(getMerchants({ merchants: [] })).toMatchSnapshot();
  });

  it('match snapshot for getMerchant selector', (): void => {
    expect(getMerchant({ merchants: [{ id: '123' } as IMerchant] }, '123')).toMatchSnapshot();
  });

  it('match snapshot for areMerchantsLoaded selector when merchant inside', (): void => {
    expect(areMerchantsLoaded({ merchants: [{ id: '123' } as IMerchant] })).toMatchSnapshot();
  });
  it('match snapshot for areMerchantsLoaded selector when no merchant inside', (): void => {
    expect(areMerchantsLoaded({ merchants: [] })).toMatchSnapshot();
  });
});
