import { Component, ReactNode } from 'react';
import { Header } from './pages/Landing/Header';
import { Main } from './pages/Landing/Main';
import { TBeer } from './data/types/beer';
import { fetchBeersFilteredByName } from './data/api/fetchBeersFilteredByName';
import { ContentLoader } from './components/ContentLoader';
import { PreLoader } from './components/PreLoader';
import { SearchTermContext } from './pages/Landing/context';

class App extends Component {
  updateAppState: (searchTerm: string) => void;
  state: Readonly<{
    beersData: TBeer[];
    isContentLoading: boolean;
    updateAppState: (searchTerm: string) => void;
  }>;

  constructor(props: never) {
    super(props);

    this.updateAppState = (searchTerm: string) => {
      this.setState({ ...this.state, isContentLoading: true });
      fetchBeersFilteredByName(searchTerm).then((beersData) => {
        this.setState({
          ...this.state,
          beersData,
          isContentLoading: false,
        });
      });
    };

    this.state = {
      beersData: [],
      isContentLoading: false,
      updateAppState: this.updateAppState,
    };
  }

  // updateAppState: (searchTerm: string) => void = (searchTerm) => {
  //   this.setState({ ...this.state, isContentLoading: true });
  //   fetchBeersFilteredByName(searchTerm).then((beersData) => {
  //     this.setState({
  //       ...this.state,
  //       beersData,
  //       isContentLoading: false,
  //     });
  //   });
  // };

  render(): ReactNode {
    return (
      <>
        <SearchTermContext.Provider value={this.state}>
          <Header />
        </SearchTermContext.Provider>
        <Main beersData={this.state.beersData} />
        {this.state.isContentLoading && <ContentLoader />}
        <PreLoader />
      </>
    );
  }
}

export default App;
