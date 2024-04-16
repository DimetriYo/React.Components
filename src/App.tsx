import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CharacterDetailCard } from './components/CharacterDetailCard';
import { PreLoader } from './components/PreLoader';

function App() {
  return (
    <>
      <PreLoader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":characterId" element={<CharacterDetailCard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
