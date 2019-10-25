import React from 'react';
import Submenu from '../layouts/Submenu';

export default class Benchmarks extends React.Component {
  public state = {
    addressSubmenu: '',
  };

  public getAddressSubmenu = (s: string) => {
    this.setState({addressSubmenu: s});
  }

  public render() {
    return (
      <>
        <Submenu module='benchmark' submodule='' getAddress={this.getAddressSubmenu} />
        This is Benchmarking
      </>
    );
  }
}
