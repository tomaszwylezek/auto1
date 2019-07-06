import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantForm } from './MerchantForm';

// Models
import { IMerchantFormProps, IMerchantFormState } from './MerchantForm.types';

describe('MerchantForm component should', (): void => {
 let props: IMerchantFormProps;
 let component: ShallowWrapper<IMerchantFormProps, IMerchantFormState>;

  beforeEach(
    (): void => {
      props = {}

      component = shallow(<MerchantForm {...props} />)
    }
  );

 it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
 });
});

