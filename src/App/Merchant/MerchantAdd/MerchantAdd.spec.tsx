import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { getMockedRouterProps } from 'testUtils/router';

import { MerchantAdd } from './MerchantAdd';

// Models
import { IMerchantAddProps } from './MerchantAdd.types';

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
