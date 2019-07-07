import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Bid } from './Bid';

// Models
import { IBidProps } from './Bid.types';

describe('Bid component should', (): void => {
  let props: IBidProps;
  let component: ShallowWrapper<IBidProps>;

  beforeEach((): void => {
    props = {
      id: '3',
      amount: 12,
      carTitle: 'Toyota',
      created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
    };

    component = shallow(<Bid {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });
});
