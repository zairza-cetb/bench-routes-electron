import React from 'react';
import Submenu from '../layouts/Submenu';

interface MonitoringModulePropsTypes {}

interface MonitoringModuleStateTypes {
  routes: object;
  sAddress: string;
}

export default class Monitoring extends React.Component<
  MonitoringModulePropsTypes,
  MonitoringModuleStateTypes
> {
  constructor(props: MonitoringModulePropsTypes) {
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
          module="monitoring"
          submodule=""
          getAddress={this.getAddressSubmenu}
        />
        <div>This is the ping page.</div>
      </>
    );
  }
}
