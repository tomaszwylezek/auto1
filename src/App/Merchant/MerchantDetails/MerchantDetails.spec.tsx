import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantDetails } from './MerchantDetails';

// Models
import { IMerchantDetailsProps, IMerchantDetailsState } from './MerchantDetails.types';
import { ButtonTheme } from 'model';

describe('MerchantDetails component should', (): void => {
  let props: IMerchantDetailsProps;
  let component: ShallowWrapper<IMerchantDetailsProps, IMerchantDetailsState>;

  beforeEach((): void => {
    props = {
      id: '123',
      name: 'Foo Bar',
      phone: '123',
      onDeleteClick: jest.fn()
    };

    component = shallow(<MerchantDetails {...props} />);
  });

  it('render correctly', (): void => {
    expect(component).toMatchSnapshot();
  });

  it('react on delete click', (): void => {
    component.find({ theme: ButtonTheme.danger }).simulate('click');
    expect(props.onDeleteClick).toHaveBeenCalled();
  });
});
