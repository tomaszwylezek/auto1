import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from 'App/Nav/Nav';

// Models
import { IAppProps } from 'App/App.types';
import { MerchantListContainer } from 'App/Merchant/MerchantList/MerchantList.container';
import { MerchantAddContainer } from 'App/Merchant/MerchantAdd/MerchantAdd.container';
import { MerchantEditContainer } from 'App/Merchant/MerchantEdit/MerchantEdit.container';

export class App extends Component<IAppProps> {
  componentDidMount(): void {
    this.props.getMerchants();
  }

  render(): JSX.Element {
    return (
      <Router>
        <Nav />
        <main className="container py-4">
          <Switch>
            <Route exact path="/" component={MerchantListContainer} />
            <Route path="/add" component={MerchantAddContainer} />
            <Route path="/:id" component={MerchantEditContainer} />
          </Switch>
        </main>
      </Router>
    );
  }
}
