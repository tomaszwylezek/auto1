import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantForm } from './MerchantForm';
import { getMockedFormikConfig } from 'testUtils/formik';

// Models
import { IMerchantFormProps, IMerchantFormValues } from './MerchantForm.types';
import { FormikProps } from 'formik';
import { IMerchant } from 'model';

describe('MerchantForm component should', (): void => {
  let props: IMerchantFormProps & FormikProps<IMerchantFormValues>;
  let component: ShallowWrapper<IMerchantFormProps & FormikProps<IMerchantFormValues>>;

  beforeEach((): void => {
    props = {
      onSubmit: jest.fn(),
      ...getMockedFormikConfig()
    };

    component = shallow(<MerchantForm {...props} />);
  });

  it('render correctly when no merchant', (): void => {
    expect(component).toMatchSnapshot();
  });

  it('change button text when merchant available', (): void => {
    component.setProps({
      merchant: {} as IMerchant
    });

    expect(component.find('Button')).toMatchSnapshot('Edit');
  });

  it('change button to not disable when valid form', (): void => {
    component.setProps({
      isValid: true,
      dirty: true
    });

    expect(component.find('Button')).toMatchSnapshot('Edit');
  });
});
