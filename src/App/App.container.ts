import { connect } from 'react-redux';

import { App } from './App';

import { IAppConnectedActions, IAppConnectedState } from './App.types';
import { IStoreState } from 'model';
import { getMerchants as fetchMerchants } from 'redux/merchants/merchants.actions';
import { areMerchantsLoaded } from 'redux/merchants/merchants.selector';

const mapStateToProps = (state: IStoreState): IAppConnectedState => ({
  isLoading: !areMerchantsLoaded(state)
});

const mapDispatchToProps: IAppConnectedActions = {
  getMerchants: fetchMerchants
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
