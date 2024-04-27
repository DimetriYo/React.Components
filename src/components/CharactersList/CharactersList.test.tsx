import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { useCharacters } from '../../features/CharactersProvider';
import { CharactersList } from '.';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});

beforeAll(() => {
  vi.mock('../../features/CharactersProvider', () => ({
    useCharacters: vi.fn(),
  }));
});

describe('Characters list', () => {
  it('shold render empty page if there are no cards', () => {
    vi.mocked(useCharacters).mockReturnValue([]);
    render(<CharactersList />);
    const component = screen.getByRole('heading');
    expect(component).toHaveTextContent('Sorry');
  });

  it('shold render 1 card', () => {
    vi.mocked(useCharacters).mockReturnValue([
      {
        id: 0,
        name: 'TestChar',
        status: 'Alive',
        species: '',
        type: '',
        gender: '',
        origin: {},
        location: {},
        image: '',
        episode: ['1'],
        url: '',
      },
    ]);

    const component = render(
      <MemoryRouter>
        <CharactersList />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
