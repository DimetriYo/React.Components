import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { CharacterCard } from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CharacterDetailCard } from '../CharacterDetailCard';
import { testedCharacter } from '../../tests/testedCharacter';

afterEach(() => {
  cleanup();
});

describe('Character card', () => {
  it('should create card with mock data', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <CharacterCard {...testCharacterData} />
      </MemoryRouter>
    );

    expect(getByAltText('TestVasya photo')).toBeInTheDocument();
  });

  it('should open details on card click', async () => {
    const { getByRole, findByTestId, getByTestId } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<CharacterCard {...testedCharacter} />} />
          <Route path="/:characterId" element={<CharacterDetailCard />} />
        </Routes>
      </MemoryRouter>
    );
    const card = getByRole('link');

    fireEvent.click(card);
    await findByTestId('details-card');

    expect(getByTestId('details-card')).toBeInTheDocument();
  });
});
