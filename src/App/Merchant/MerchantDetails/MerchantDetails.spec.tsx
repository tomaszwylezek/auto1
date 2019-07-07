import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantDetails } from './MerchantDetails';

// Models
import { IMerchantDetailsProps, IMerchantDetailsState } from './MerchantDetails.types';

describe('MerchantDetails component should', (): void => {
  let props: IMerchantDetailsProps;
  let component: ShallowWrapper<IMerchantDetailsProps, IMerchantDetailsState>;

  beforeEach((): void => {
    props = {};

    component = shallow(<MerchantDetails {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });
});
