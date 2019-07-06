import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Nav } from './Nav';

// Models
import { INavProps } from './Nav.types';

describe('Nav component should', (): void => {
  let props: INavProps;
  let component: ShallowWrapper<INavProps>;

  beforeEach((): void => {
    props = {};

    component = shallow(<Nav {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });
});
