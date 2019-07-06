import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from 'App/Nav/Nav';

// Models
import { IAppProps } from 'App/App.types';
import { MerchantListContainer } from 'App/Merchant/MerchantList/MerchantList.container';
import { MerchantAddContainer } from 'App/Merchant/MerchantAdd/MerchantAdd.container';

export class App extends Component<IAppProps> {

  componentDidMount(): void {
    this.props.getMerchants();
  }

  render(): JSX.Element {

    return <Router>
        <Nav />
        <main className="container py-4">
          <Switch>
            <Route path="/" component={MerchantListContainer} />
            <Route path="/add" component={MerchantAddContainer} />
          </Switch>
        </main>
      </Router>;
  }
}
