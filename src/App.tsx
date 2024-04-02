import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CharactersProvider } from './features/CharactersProvider';
import { CharacterDetailCard } from './components/CharacterDetailCard';

function App() {
  return (
    <CharactersProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":characterId" element={<CharacterDetailCard />} />
        </Route>
      </Routes>
    </CharactersProvider>
  );
}

export default App;
