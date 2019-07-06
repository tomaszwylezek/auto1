import { connect } from 'react-redux';
import { getMerchants } from 'redux/merchants/merchants.actions';

import { App } from './App';

import { IAppConnectedActions, IAppConnectedState } from './App.types';

const mapStateToProps = (state): IAppConnectedState => ({});

const mapDispatchToProps: IAppConnectedActions = {
  getMerchants
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
