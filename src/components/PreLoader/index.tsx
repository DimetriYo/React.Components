import { Component, ReactNode } from 'react';
import massageKitty from '../../assets/massageCat.gif';
import emptyPokets from '../../assets/nothingFound.png';

export class PreLoader extends Component {
  render(): ReactNode {
    return (
      <div style={{ display: 'none' }}>
        <img src={massageKitty} />
        <img src={emptyPokets} />
      </div>
    );
  }
}
