import { MenuItem, Category, CategoryType } from '../types/types';
import { categories } from './parts/categories';
import { sandwichItems } from './parts/sandwiches';
import { otherItems, drinks } from './parts/others';
import { beerItems } from './parts/beers';
import { iberianHamItems, otherDrinkItems, moreItems } from './parts/more';

// Combinamos todos los elementos del menú
export const menuItems: MenuItem[] = [
  ...sandwichItems,
  ...otherItems,
  ...drinks,
  ...beerItems,
  ...iberianHamItems,
  ...otherDrinkItems,
  ...moreItems
];

// Exportamos las categorías
export { categories };