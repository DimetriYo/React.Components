import { Component, PropsWithChildren } from 'react';

class ErrorBoundary extends Component<PropsWithChildren & { fallback: JSX.Element }> {
  state: Readonly<{ hasError: boolean }> = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error);
    console.log(
      `Don't worry.This is just a simple error.\n
      We're already on it.\n
      We appologise for the incovenience caused.\n
      Have a cosy day!`
    );
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
