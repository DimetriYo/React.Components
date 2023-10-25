import { Component, PropsWithChildren } from 'react';

class ErrorBoundary extends Component<PropsWithChildren & { fallback: JSX.Element }> {
  state: Readonly<{ hasError: boolean }> = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
