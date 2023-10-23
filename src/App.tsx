import { Component, ReactNode } from 'react';
import { Header } from './pages/Landing/Header';
import { Main } from './pages/Landing/Main';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
