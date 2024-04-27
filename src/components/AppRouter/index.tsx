import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { CharacterDetailCard } from '../CharacterDetailCard';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path=":characterId" element={<CharacterDetailCard />} />
      </Route>
    </Routes>
  );
}
