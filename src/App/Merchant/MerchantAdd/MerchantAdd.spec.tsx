import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantAdd } from './MerchantAdd';

// Models
import { IMerchantAddProps } from './MerchantAdd.types';
import { getMockedRouterProps } from 'testUtils/router';

describe('MerchantAdd component should', (): void => {
  let props: IMerchantAddProps;
  let component: ShallowWrapper<IMerchantAddProps>;

  beforeEach((): void => {
    props = {
      addMerchant: jest.fn(),
      ...getMockedRouterProps()
    };

    component = shallow(<MerchantAdd {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });
});
