import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { CharacterCard } from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CharacterDetailCard } from '../CharacterDetailCard';
import { testedCharacter } from '../../tests/testedCharacter';

afterEach(() => {
  cleanup();
});

describe('Character card', () => {
  it(`should render character card with character name ${testedCharacter.name}`, () => {
    render(
      <MemoryRouter>
        <CharacterCard {...testedCharacter} />
      </MemoryRouter>
    );

    expect(screen.queryByTestId('character-name')).toHaveTextContent(
      `${testedCharacter.name}`
    );
  });

  it('should open details on card click', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<CharacterCard {...testedCharacter} />} />
          <Route path="/:characterId" element={<CharacterDetailCard />} />
        </Routes>
      </MemoryRouter>
    );
    const card = screen.getByRole('link');

    fireEvent.click(card);
    await screen.findByTestId('details-card');

    expect(screen.getByTestId('details-card')).toBeInTheDocument();
  });
});
