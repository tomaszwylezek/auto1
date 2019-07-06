import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantList } from './MerchantList';

// Models
import { IMerchantListProps, IMerchantListState } from './MerchantList.types';

describe('MerchantList component should', (): void => {
 let props: IMerchantListProps;
 let component: ShallowWrapper<IMerchantListProps, IMerchantListState>;

  beforeEach(
    (): void => {
      props = {}

      component = shallow(<MerchantList {...props} />)
    }
  );

 it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
 });
});

