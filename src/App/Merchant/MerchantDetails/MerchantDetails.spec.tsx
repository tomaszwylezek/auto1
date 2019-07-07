import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MerchantDetails } from './MerchantDetails';

// Models
import { ButtonTheme } from 'model';
import { IMerchantDetailsProps, IMerchantDetailsState } from './MerchantDetails.types';

describe('MerchantDetails component should', (): void => {
  let props: IMerchantDetailsProps;
  let component: ShallowWrapper<IMerchantDetailsProps, IMerchantDetailsState>;

  beforeEach((): void => {
    props = {
      id: '123',
      name: 'Foo Bar',
      phone: '123',
      onDeleteClick: jest.fn(),
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
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
