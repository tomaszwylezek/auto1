import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Button } from './Button';

// Models
import { IButtonProps } from './Button.types';

describe('Button component should', (): void => {
  it('call onClick if passed', (): void => {
    const props: IButtonProps = {
      onClick: jest.fn()
    };

    const component: ShallowWrapper<IButtonProps> = shallow(<Button {...props}>Anything</Button>);

    component.find('button').simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });
});
