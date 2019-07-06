import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantEdit } from './MerchantAdd';

// Models
import { IMerchantAddProps, IMerchantAddState } from './MerchantAdd.types';

describe('MerchantAdd component should', (): void => {
  let props: IMerchantAddProps;
  let component: ShallowWrapper<IMerchantAddProps, IMerchantAddState>;

  beforeEach((): void => {
    props = {};

    component = shallow(<MerchantEdit {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });
});
