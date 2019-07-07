export interface IAppConnectedState {
  isLoading: boolean;
}

export interface IAppConnectedActions {
  getMerchants: () => void;
}

export interface IAppProps extends IAppConnectedState, IAppConnectedActions {}
