export interface IBasicPokemon {
  name: string;
  url: string;
}

export interface IPokemon {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The base experience gained for defeating this Pokémon */
  base_experience: number;
  /** The height of this Pokémon in decimetres */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species */
  weight: number;
  /** A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: IPokemonSprites;
}

export interface IPokemonSprites {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string;
  /** The shiny female depiction of this Pokémon from the front in battle */
  front_shiny_female: string;
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string;
}
