import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Button } from './Button';
// Models
import { IButtonProps } from './Button.types';
import { ButtonTheme } from 'model';

describe('Button component should', (): void => {
  it('renders basic component', (): void => {
    const component: ShallowWrapper<IButtonProps> = shallow(<Button>Anything</Button>);

    expect(component).toMatchSnapshot();
  });

  it('renders Link', (): void => {
    const component: ShallowWrapper<IButtonProps> = shallow(<Button to={'/foo'}>Anything</Button>);

    expect(component).toMatchSnapshot();
  });

  it('renders other theme', (): void => {
    const component: ShallowWrapper<IButtonProps> = shallow(
      <Button theme={ButtonTheme.outlineDanger}>Anything</Button>
    );

    expect(component.find('button').prop('className')).toContain('outline-danger');
  });
});
