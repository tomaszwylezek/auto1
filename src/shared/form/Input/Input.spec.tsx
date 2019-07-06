import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { getMockedField, getMockedFormikConfig } from 'testUtils/formik';
import { Input } from './Input';

// Models
import { FieldProps } from 'formik';
import { IInputProps } from './Input.types';

describe('Input component should', (): void => {
  let component: ShallowWrapper<IInputProps & FieldProps>;
  let props: IInputProps & FieldProps;

  beforeEach((): void => {
    props = {
      label: 'bar',
      field: getMockedField({ name: 'foo' }),
      form: getMockedFormikConfig()
    };

    component = shallow(<Input {...props} />).dive();
  });

  it('renders correctly', (): void => {
    expect(component).toMatchSnapshot();
  });
});
