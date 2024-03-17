import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CharactersList } from './components/CharactersList';
import { CharactersProvider } from './features/CharactersProvider';

function App() {
  return (
    <CharactersProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CharactersList />} />
        </Route>
      </Routes>
    </CharactersProvider>
  );
}

export default App;
