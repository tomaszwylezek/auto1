import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Label } from './Label';

// Models

import { ILabelProps } from './Label.types';

describe('Label component should', (): void => {
  it('renders correctly', (): void => {
    const props: ILabelProps = {
      id: 'foo',
      className: 'foobar'
    };

    const component: ShallowWrapper<ILabelProps> = shallow(<Label {...props}>foo</Label>);

    expect(component).toMatchSnapshot();
  });
});
