export interface IAppOwnProps {}

export interface IAppConnectedState {}

export interface IAppConnectedActions {
  getMerchants: () => void;
}

export interface IAppProps extends IAppConnectedState, IAppConnectedActions, IAppOwnProps {}

export interface IAppState {}
