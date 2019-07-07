import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Input } from './Input';

// Config
import { getMockedFormikConfig, getMockedField } from 'testUtils/formik';

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

  it('react on change', (): void => {
    component.find('input').simulate('change', {});

    expect(props.field.onChange).toHaveBeenCalledWith({});
    expect(props.form.setFieldTouched).toHaveBeenCalledWith('foo', true, true);
  });
});
