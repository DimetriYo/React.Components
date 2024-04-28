import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import { getTestChar } from '../../tests/testedCharacter';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { CharacterDetailCard } from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { fetchCharacterById } from '../../api/fetchCharacterById';

vi.mock('../../api/fetchCharacterById', () => ({
  fetchCharacterById: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe('Character details card', () => {
  it('should show loading indicator while fetching data', () => {
    const testCharacter = getTestChar();

    vi.mocked(fetchCharacterById).mockReturnValue(
      new Promise((res) => setTimeout(() => res(testCharacter), 5000))
    );
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[`/${testCharacter.id}`]}>
        <Routes>
          <Route path="/:characterId" element={<CharacterDetailCard />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByTestId('content-loader')).toBeInTheDocument();
  });

  it("shold display character's name and gender", async () => {
    const testCharacter = getTestChar();

    vi.mocked(fetchCharacterById).mockReturnValue(
      Promise.resolve(testCharacter)
    );

    const { findByText } = render(
      <MemoryRouter initialEntries={[`/${testCharacter.id}`]}>
        <Routes>
          <Route path="/:characterId" element={<CharacterDetailCard />} />
        </Routes>
      </MemoryRouter>
    );

    await expect(findByText(testCharacter.name)).resolves.toBeInTheDocument();
    await expect(findByText(testCharacter.gender)).resolves.toBeInTheDocument();
  });

  it('shold remove the component on close btn click', async () => {
    const testCharacter = getTestChar();

    vi.mocked(fetchCharacterById).mockReturnValue(
      Promise.resolve(testCharacter)
    );

    const { findByRole, queryByTestId } = render(
      <MemoryRouter initialEntries={[`/${testCharacter.id}`]}>
        <Routes>
          <Route path="/:characterId" element={<CharacterDetailCard />} />
        </Routes>
      </MemoryRouter>
    );

    const component = await findByRole('button', { name: 'Close' });
    expect(queryByTestId('details-card')).toBeInTheDocument();

    fireEvent.click(component);

    expect(queryByTestId('details-card')).not.toBeInTheDocument();
  });
});
