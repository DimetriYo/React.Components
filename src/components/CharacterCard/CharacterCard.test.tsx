import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { CharacterCard } from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CharacterDetailCard } from '../CharacterDetailCard';
import { getTestChar } from '../../tests/testedCharacter';
import { fetchCharacterById } from '../../api/fetchCharacterById';

vi.mock('../../api/fetchCharacterById', () => ({
  fetchCharacterById: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe('Character card', () => {
  const testCharacter = getTestChar();
  it(`should render character card with character name ${testCharacter.name}`, () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <CharacterCard {...testCharacter} />
      </MemoryRouter>
    );

    expect(getByTestId('character-name')).toHaveTextContent(
      `${testCharacter.name}`
    );
  });

  it('should open details on card click', async () => {
    vi.mocked(fetchCharacterById).mockReturnValue(
      Promise.resolve(testCharacter)
    );
    const { getByTestId, findByTestId } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<CharacterCard {...testCharacter} />} />
          <Route path="/:characterId" element={<CharacterDetailCard />} />
        </Routes>
      </MemoryRouter>
    );
    const card = getByTestId('character-card');
    fireEvent.click(card);
    const detailsCard = await findByTestId('details-card');

    expect(detailsCard).toBeInTheDocument();
  });

  it('should make a call for character details data on character card click', () => {
    vi.mocked(fetchCharacterById).mockReturnValue(
      Promise.resolve(testCharacter)
    );
    const { getByTestId } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<CharacterCard {...testCharacter} />} />
          <Route path="/:characterId" element={<CharacterDetailCard />} />
        </Routes>
      </MemoryRouter>
    );
    const card = getByTestId('character-card');
    fireEvent.click(card);

    expect(vi.mocked(fetchCharacterById)).toHaveBeenCalledWith(
      testCharacter.id.toString()
    );
  });
});
