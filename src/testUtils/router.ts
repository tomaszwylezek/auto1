import { RouteComponentProps } from 'react-router';
import { UnregisterCallback, Href, Location } from 'history';

export function getMockedRouterProps<P = any>(params?: P, locationData?: Partial<Location>) {
  const location: Location = {
    pathname: '',
    hash: '',
    key: '',
    search: '',
    state: '',
    ...locationData
  };

  const props: RouteComponentProps<P> = {
    match: {
      isExact: true,
      params,
      path: '',
      url: ''
    },
    location,
    history: {
      length: 2,
      action: 'POP',
      location,
      push: jest.fn(),
      replace: () => null,
      go: () => null,
      goBack: jest.fn(),
      goForward: () => null,
      block: () => {
        return null as UnregisterCallback;
      },
      createHref: () => {
        const temp: Href = '';
        return temp as Href;
      },
      listen: () => {
        return null as UnregisterCallback;
      }
    },
    staticContext: {}
  };

  return props;
}
