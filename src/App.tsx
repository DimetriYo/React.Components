import { Component, ReactNode } from 'react';
import { Header } from './pages/Landing/Header';
import { Main } from './pages/Landing/Main';
import { TBeer } from './data/types/beer';
import { fetchBeersFilteredByName } from './data/api/fetchBeersFilteredByName';

class App extends Component {
  state: Readonly<{
    beersData: TBeer[];
  }> = {
    beersData: [],
  };

  updateAppState: (searchTerm: string) => void = (searchTerm) => {
    fetchBeersFilteredByName(searchTerm).then((beersData) => {
      this.setState({
        ...this.state,
        beersData,
      });
    });
  };

  render(): ReactNode {
    return (
      <>
        <Header updateAppState={this.updateAppState} />
        <Main beersData={this.state.beersData} />
      </>
    );
  }
}

export default App;
