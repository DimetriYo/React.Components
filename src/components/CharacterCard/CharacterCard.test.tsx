import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { CharacterCard } from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CharacterDetailCard } from '../CharacterDetailCard';
import { server } from '../../tests/mockServerNode';
import { testedCharacter } from '../../tests/testedCharacter';

beforeEach(() => {
  server.listen();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Character card', () => {
  it('should create card with mock data', () => {
    render(
      <MemoryRouter>
        <CharacterCard {...testedCharacter} />
      </MemoryRouter>
    );

    expect(screen.getByAltText('TestVasya photo')).toBeInTheDocument();
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
