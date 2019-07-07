import { connect } from 'react-redux';

import { App } from './App';

// Redux
import { getMerchants as fetchMerchants } from 'redux/merchants/merchants.actions';
import { areMerchantsLoaded } from 'redux/merchants/merchants.selector';

// Models
import { IStoreState } from 'model';
import { IAppConnectedActions, IAppConnectedState } from './App.types';

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
