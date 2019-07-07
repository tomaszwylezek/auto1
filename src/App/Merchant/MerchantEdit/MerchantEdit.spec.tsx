import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantEdit } from './MerchantEdit';
import { getMockedRouterProps } from 'testUtils/router';

// Models
import { IMerchantEditProps } from './MerchantEdit.types';
import { IMerchant } from 'model';

describe('MerchantEdit component should', (): void => {
  let props: IMerchantEditProps;
  let component: ShallowWrapper<IMerchantEditProps>;

  beforeEach((): void => {
    props = {
      editMerchant: jest.fn(),
      merchant: {} as IMerchant,
      ...getMockedRouterProps()
    };

    component = shallow(<MerchantEdit {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });
});
