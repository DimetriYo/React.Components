import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { useCharacters } from '../../features/CharactersProvider';
import { CharactersList } from '.';
import { MemoryRouter } from 'react-router-dom';
import { getTestChar } from '../../tests/testedCharacter';

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});

beforeAll(() => {
  vi.mock('../../features/CharactersProvider', () => ({
    useCharacters: vi.fn(),
  }));
});

afterAll(() => {
  vi.doUnmock('../../features/CharactersProvider');
});

describe('Characters list', () => {
  it('shold render empty page if there are no cards', () => {
    vi.mocked(useCharacters).mockReturnValue([]);
    const { getByTestId } = render(<CharactersList />);
    expect(getByTestId('empty-chars-list')).toBeInTheDocument();
  });

  it('shold render 3 cards', () => {
    vi.mocked(useCharacters).mockReturnValue(
      [...new Array(3)].map(() => getTestChar())
    );

    const { getAllByTestId } = render(
      <MemoryRouter>
        <CharactersList />
      </MemoryRouter>
    );

    expect(getAllByTestId('character-card').length).toBe(3);
  });
});
