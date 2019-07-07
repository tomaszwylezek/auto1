import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantList } from './MerchantList';

// Models
import { IMerchantListProps, IMerchantListState } from './MerchantList.types';
import { IMerchant } from 'model';

describe('MerchantList component should', (): void => {
  let props: IMerchantListProps;
  let component: ShallowWrapper<IMerchantListProps, IMerchantListState>;

  beforeEach((): void => {
    props = {
      deleteMerchant: jest.fn(),
      merchants: []
    };

    window.scrollTo = jest.fn();
    component = shallow(<MerchantList {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });

  it('render correctly with merchants', (): void => {
    component.setProps({
      merchants: [
        { id: '123', firstname: 'foo', lastname: 'bar' },
        { id: '1234', firstname: 'foo', lastname: 'bar' },
        { id: '122333', firstname: 'foo', lastname: 'bar' },
        { id: '12424134', firstname: 'foo', lastname: 'bar' },
        { id: '125323', firstname: 'foo', lastname: 'bar' },
        { id: '12532334', firstname: 'foo', lastname: 'bar' }
      ] as IMerchant[]
    });
    expect(component).toMatchSnapshot();
  });

  it('render next five after page changed', (): void => {
    component.setProps({
      merchants: [
        { id: '123', firstname: 'foo', lastname: 'bar' },
        { id: '1234', firstname: 'foo', lastname: 'bar' },
        { id: '122333', firstname: 'foo', lastname: 'bar' },
        { id: '12424134', firstname: 'foo', lastname: 'bar' },
        { id: '125323', firstname: 'foo', lastname: 'bar' },
        { id: '12532334', firstname: 'foo', lastname: 'bar' }
      ] as IMerchant[]
    });

    component
      .find('.page-link')
      .at(2)
      .simulate('click');

    expect(
      component
        .find('MerchantDetails')
        .at(0)
        .prop('id')
    ).toBe('12532334');
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
