import { IAction } from 'model/common';
import { ADD_MERCHANT, DELETE_MERCHANT, EDIT_MERCHANT, GET_MERCHANTS } from 'redux/merchants/merchants.actionTypes';
import { IMerchant } from 'model';

export const getMerchants = (): IAction<IMerchant[]> => ({
  type: GET_MERCHANTS,
  payload: [
    {
      id: '1',
      firstname: 'Tomasz',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz@gmail.com',
      phone: '555-555-555',
      hasPremium: true,
      bids: [
        {
          id: '1',
          amount: 12,
          carTitle: 'Subaru',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        },
        {
          id: '2',
          amount: 15,
          carTitle: 'Subaru',
          created: new Date(
            +new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)') + 10000
          ).toString()
        }
      ]
    },
    {
      id: '2',
      firstname: 'Grzegorz',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '3',
      firstname: 'Michal',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '4',
      firstname: 'Adam',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '5',
      firstname: 'Lajla',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '6',
      firstname: 'Lidia',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '7',
      firstname: 'Leokadia',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '8',
      firstname: 'Iwona',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '9',
      firstname: 'Grzegorz',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '4322',
      firstname: 'Ania',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    },
    {
      id: '2432432',
      firstname: 'Seba',
      lastname: 'Wylezek',
      avatarUrl: '',
      email: 'xyz2@gmail.com',
      phone: '665-555-555',
      hasPremium: true,
      bids: [
        {
          id: '3',
          amount: 12,
          carTitle: 'Toyota',
          created: new Date('Sat Jul 06 2019 10:31:54 GMT+0200 (Central European Summer Time)').toString()
        }
      ]
    }
  ]
});

export const addMerchant = (merchant: IMerchant): IAction<IMerchant> => ({
  type: ADD_MERCHANT,
  payload: merchant
});

export const editMerchant = (merchant: IMerchant): IAction<IMerchant> => ({
  type: EDIT_MERCHANT,
  payload: merchant
});

export const deleteMerchant = (id: string): IAction<string> => ({
  type: DELETE_MERCHANT,
  payload: id
});
