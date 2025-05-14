export interface MenuItem {
  id: string;
  name: {
    es: string;
    en: string;
    fr: string;
    de: string;
    pt: string;
    ca: string;
  };
  description: {
    es: string;
    en: string;
    fr: string;
    de: string;
    pt: string;
    ca: string;
  };
  price: number;
  image: string;
  category: CategoryType;
}

export type CategoryType = 
  | 'sandwiches'
  | 'supplements'
  | 'eggs'
  | 'kids'
  | 'cafeteria'
  | 'lunch'
  | 'salads'
  | 'lactoseFree'
  | 'soups'
  | 'vegetarian'
  | 'glutenFree'
  | 'drinks'
  | 'juices'
  | 'beers'
  | 'smallBeers'
  | 'otherDrinks'
  | 'iberianHam';

export interface Category {
  id: CategoryType;
  name: {
    es: string;
    en: string;
    fr: string;
    de: string;
    pt: string;
    ca: string;
  };
}