import { Component, ReactNode } from 'react';
import { Header } from './pages/Landing/Header';
import { Main } from './pages/Landing/Main';
import { TBeer } from './data/types/beer';
import { fetchBeersFilteredByName } from './data/api/fetchBeersFilteredByName';
import { ContentLoader } from './components/ContentLoader';
import { PreLoader } from './components/PreLoader';

class App extends Component {
  state: Readonly<{
    beersData: TBeer[];
    isContentLoading: boolean;
  }> = {
    beersData: [],
    isContentLoading: false,
  };

  updateAppState: (searchTerm: string) => void = (searchTerm) => {
    this.setState({ ...this.state, isContentLoading: true });
    fetchBeersFilteredByName(searchTerm).then((beersData) => {
      this.setState({
        ...this.state,
        beersData,
        isContentLoading: false,
      });
    });
  };

  render(): ReactNode {
    return (
      <>
        <Header updateAppState={this.updateAppState} />
        <Main beersData={this.state.beersData} />
        {this.state.isContentLoading && <ContentLoader />}
        <PreLoader />
      </>
    );
  }
}

export default App;
