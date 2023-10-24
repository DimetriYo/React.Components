export type TBeer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number; //alcohol by volume - 'strength'
  ibu: number; //international bittering unit - bitterness index
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: TVolume;
  boil_volume: TVolume;
  method: {
    mash_temp: [
      {
        temp: TTemp;
        duration: number;
      },
    ];
    fermentation: {
      temp: TTemp;
    };
    twist: null;
  };
  ingredients: TIngredients;
  food_pairing: string[];
  brewers_tips: string;
};

type TIngredients = {
  malt: TMalt[];
  hops: THops[];
  yeast: string;
};

type TMalt = {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
};

type THops = {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
};

type TTemp = {
  value: number;
  unit: string;
};

type TVolume = {
  value: number;
  unit: string;
};
