import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Features
import { Nav } from 'App/Nav/Nav';
import { MerchantListContainer } from 'App/Merchant/MerchantList/MerchantList.container';
import { MerchantAddContainer } from 'App/Merchant/MerchantAdd/MerchantAdd.container';
import { MerchantEditContainer } from 'App/Merchant/MerchantEdit/MerchantEdit.container';

// Models
import { IAppProps } from 'App/App.types';

export class App extends Component<IAppProps> {
  componentDidMount(): void {
    this.props.getMerchants();
  }

  getContent(): JSX.Element {
    return (
      <Switch>
        <Route exact path="/" component={MerchantListContainer} />
        <Route path="/add" component={MerchantAddContainer} />
        <Route path="/:id" component={MerchantEditContainer} />
      </Switch>
    );
  }

  render(): JSX.Element {
    return (
      <main>
        <Nav />
        <section className="container py-4">{this.props.isLoading ? 'Loading' : this.getContent()}</section>
      </main>
    );
  }
}
