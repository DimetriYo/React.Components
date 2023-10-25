import { Component, ReactNode } from 'react';

export class FallbackForErrorBoundary extends Component {
  render(): ReactNode {
    return (
      <div>
        <h2>Ooops!</h2>
        <p>Something went wrong!</p>
        <p>Maybe try to reload the page, clicking the button below.</p>
        <button type="button">Click me!</button>
      </div>
    );
  }
}
