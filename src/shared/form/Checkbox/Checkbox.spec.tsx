import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Checkbox } from './Checkbox';

// Config
import { getMockedField, getMockedFormikConfig } from 'testUtils/formik';

// Models
import { FieldProps } from 'formik';
import { ICheckboxProps } from './Checkbox.types';

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
});
