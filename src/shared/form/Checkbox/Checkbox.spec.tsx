import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Checkbox } from './Checkbox';

// Models
import { ICheckboxProps } from './Checkbox.types';
import { getMockedField, getMockedFormikConfig } from 'testUtils/formik';
import { FieldProps } from 'formik';

describe('Checkbox component should', (): void => {
  let props: ICheckboxProps & FieldProps;
  let component: ShallowWrapper<ICheckboxProps & FieldProps>;

  beforeEach((): void => {
    props = {
      label: 'bar',
      field: getMockedField({ name: 'foo' }),
      form: getMockedFormikConfig()
    };

    component = shallow(<Checkbox {...props} />);
  });

  it('renders correctly', (): void => {
    expect(component).toMatchSnapshot();
  });

  it('renders invalid message', (): void => {
    component.setProps({
      form: getMockedFormikConfig({
        touched: { foo: true },
        errors: { foo: 'core.error' }
      })
    });

    expect(component).toMatchSnapshot();
  });
});
