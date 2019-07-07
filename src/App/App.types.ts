export interface IAppOwnProps {}

export interface IAppConnectedState {
  isLoading: boolean;
}

export interface IAppConnectedActions {
  getMerchants: () => void;
}

export interface IAppProps extends IAppConnectedState, IAppConnectedActions, IAppOwnProps {}

export interface IAppState {}
