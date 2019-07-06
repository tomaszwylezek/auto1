import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from 'App/Nav/Nav';

// Models
import { IAppProps } from 'App/App.types';

export class App extends Component<IAppProps> {

  componentDidMount(): void {
    this.props.getMerchants();
  }

  render(): JSX.Element {

    return <Router>
        <Nav />
        <main className="container py-4">
          <Switch>
            <Route path="/" children={() => 'main'} />
          </Switch>
        </main>
      </Router>;
  }
}
