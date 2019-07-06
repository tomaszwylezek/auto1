import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { App } from './App';

// Models
import { IAppProps, IAppState } from './App.types';

describe('App component should', (): void => {
  let props: IAppProps;
  let component: ShallowWrapper<IAppProps, IAppState>;

  beforeEach((): void => {
    props = {
      getMerchants: jest.fn()
    };

    component = shallow(<App {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });

  it('calls getMerchants onMount', (): void => {
    expect(props.getMerchants).toHaveBeenCalled();
  });
});
