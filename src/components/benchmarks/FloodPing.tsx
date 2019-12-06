import React, { Component } from 'react';
import Submenu from '../layouts/Submenu';

interface FPingModulePropsTypes {}

interface FPingModuleStateTypes {
  routes: object;
  sAddress: string;
}

export default class FloodPing extends Component<
  FPingModulePropsTypes,
  FPingModuleStateTypes
> {
  constructor(props: FPingModulePropsTypes) {
    super(props);

    this.state = {
      // submenu address
      routes: {},
      sAddress: ''
    };
  }

  public getAddressSubmenu = (sAddressParam: string) => {
    this.setState({ sAddress: sAddressParam });
  };

  public render() {
    return (
      <>
        <div className="btn-layout">
          {/* operations */}
          <button className="button-operations btn btn-success">Start</button>
          <button className="button-operations btn btn-danger">Stop</button>
        </div>
        <Submenu
          module="ping"
          submodule=""
          getAddress={this.getAddressSubmenu}
        />
        <div>This is the flood ping page.</div>
      </>
    );
  }
}
