import React from 'react';
import { BRConnectionInstance } from '../../utils/connection';

interface SubmenuPropsTypes {
  module: string;
  submodule: string;
  getAddress: (sAddress: string) => void;
}

interface RouterType {
  headers: object[];
  method: string;
  params: object[];
  url: string;
}

interface SubmenuStateTypes {
  module: string;
  urlSlot: string;
  methodSlot: string;
  routeSlot: string;
  paramSlot: string;
  routes: any;
}

export default class Submenu extends React.Component<
  SubmenuPropsTypes,
  SubmenuStateTypes
> {
  constructor(props: SubmenuPropsTypes) {
    super(props);

    const instance: RouterType = {
      headers: [],
      method: '',
      params: [],
      url: ''
    };
    const tmp: RouterType[] = [];

    this.state = {
      methodSlot: '',
      module: '',
      paramSlot: '',
      routeSlot: '',
      routes: tmp,
      urlSlot: ''
    };
  }

  public componentDidMount() {
    this.setState({ module: this.props.module });
    BRConnectionInstance.routeDetails().then((res: any) => {
      this.setState({ routes: res.routes });
    });
  }

  public sendAddress = () => {
    switch (this.props.module) {
      case 'ping':
        this.props.getAddress(this.state.urlSlot);
        break;
      default:
        this.props.getAddress(
          this.state.urlSlot +
            '/' +
            this.state.methodSlot +
            '/' +
            this.state.routeSlot +
            '/' +
            this.state.paramSlot
        );
    }
  };

  public render() {
    return (
      <>
        {/* submenu container */}
        <div className="submenu-container">
          {/* Drop-down components */}
          <div>
            <div>
              {/* IP / Domain */}
              {this.props.module === 'ping' &&
              this.props.submodule.length === 0 ? (
                <div>
                  <select
                    className="submenu-style-general"
                    onChange={e => this.setState({ urlSlot: e.target.value })}
                  >
                    {this.state.routes.length !== 0
                      ? this.state.routes.map((val: RouterType, id: number) => (
                          <option key={id} value={val.url}>
                            {val.url}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
              ) : null}
            </div>
          </div>

          <div className="float-right">
            <button
              onClick={this.sendAddress}
              className="submenu-show-graph btn-primary"
            >
              Show
            </button>
          </div>
        </div>
      </>
    );
  }
}
