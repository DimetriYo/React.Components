import { ChangeEventHandler, Component, ReactNode } from 'react';

export class SearchInput extends Component<{
  value: string;
  handleInputChange: ChangeEventHandler;
}> {
  render(): ReactNode {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.handleInputChange}
      />
    );
  }
}
