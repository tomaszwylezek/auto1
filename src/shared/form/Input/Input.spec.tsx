import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Input } from './Input';

// Config
import { getMockedField, getMockedFormikConfig } from 'testUtils/formik';

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

    component = shallow(<Input {...props} />);
  });

  it('renders correctly', (): void => {
    expect(component).toMatchSnapshot();
  });
});
