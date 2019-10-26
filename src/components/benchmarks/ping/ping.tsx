import React from 'react';
import Submenu from '../../layouts/Submenu';

export default class PingModule extends React.Component {
  public state = {
    // submenu ddress
    sAddress: ''
  };

  public getAddressSubmenu = (sAddress: string) => {
    this.state.sAddress = sAddress;
  };

  public render() {
    return (
      <Submenu module="ping" submodule="" getAddress={this.getAddressSubmenu} />
    );
  }
}
