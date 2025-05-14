import { MenuItem } from '../../types/types';

export const otherItems: MenuItem[] = [
  // Menú Infantil
  {
    id: 'kids-menu-1',
    name: {
      es: 'Pechuga de pollo o hamburguesa con patatas y ensalada + postre',
      en: 'Chicken breast or hamburger with fries and salad + dessert',
      fr: 'Poitrine de poulet ou hamburger avec frites et salade + dessert',
      de: 'Hähnchenbrust oder Hamburger mit Pommes und Salat + Dessert',
      pt: 'Peito de frango ou hambúrguer com batatas fritas e salada + sobremesa',
      ca: 'Pit de pollastre o hamburguesa amb patates i amanida + postres'
    },
    description: {
      es: 'Menú infantil completo con postre incluido',
      en: 'Complete kids menu with dessert included',
      fr: 'Menu enfant complet avec dessert inclus',
      de: 'Komplettes Kindermenü mit Dessert',
      pt: 'Menu infantil completo com sobremesa incluída',
      ca: 'Menú infantil complet amb postres inclòs'
    },
    price: 10.50,
    image: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg',
    category: 'kids'
  },
  {
    id: 'kids-menu-2',
    name: {
      es: 'Arroz, huevos fritos, longaniza',
      en: 'Rice, fried eggs, sausage',
      fr: 'Riz, œufs au plat, saucisse',
      de: 'Reis, Spiegeleier, Wurst',
      pt: 'Arroz, ovos fritos, linguiça',
      ca: 'Arròs, ous ferrats, llonganissa'
    },
    description: {
      es: 'Menú infantil tradicional con arroz',
      en: 'Traditional kids menu with rice',
      fr: 'Menu enfant traditionnel avec riz',
      de: 'Traditionelles Kindermenü mit Reis',
      pt: 'Menu infantil tradicional com arroz',
      ca: 'Menú infantil tradicional amb arròs'
    },
    price: 9.50,
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
    category: 'kids'
  },

  // Cafetería
  {
    id: 'croissant',
    name: {
      es: 'Croissant',
      en: 'Croissant',
      fr: 'Croissant',
      de: 'Croissant',
      pt: 'Croissant',
      ca: 'Croissant'
    },
    description: {
      es: 'Croissant tradicional',
      en: 'Traditional croissant',
      fr: 'Croissant traditionnel',
      de: 'Traditionelles Croissant',
      pt: 'Croissant tradicional',
      ca: 'Croissant tradicional'
    },
    price: 1.50,
    image: 'https://images.pexels.com/photos/3724/food-morning-breakfast-orange-juice.jpg',
    category: 'cafeteria'
  },
  {
    id: 'napolitana',
    name: {
      es: 'Napolitana',
      en: 'Chocolate croissant',
      fr: 'Pain au chocolat',
      de: 'Schokoladencroissant',
      pt: 'Napolitana',
      ca: 'Napolitana'
    },
    description: {
      es: 'Napolitana de chocolate',
      en: 'Chocolate filled pastry',
      fr: 'Pain au chocolat',
      de: 'Mit Schokolade gefülltes Gebäck',
      pt: 'Napolitana de chocolate',
      ca: 'Napolitana de xocolata'
    },
    price: 1.70,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    category: 'cafeteria'
  },
  {
    id: 'croissant-mixto',
    name: {
      es: 'Croissant mixto',
      en: 'Ham and cheese croissant',
      fr: 'Croissant mixte',
      de: 'Schinken-Käse-Croissant',
      pt: 'Croissant misto',
      ca: 'Croissant mixt'
    },
    description: {
      es: 'Croissant con jamón y queso',
      en: 'Croissant with ham and cheese',
      fr: 'Croissant avec jambon et fromage',
      de: 'Croissant mit Schinken und Käse',
      pt: 'Croissant com presunto e queijo',
      ca: 'Croissant amb pernil i formatge'
    },
    price: 2.80,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    category: 'cafeteria'
  },
  {
    id: 'toast-butter-jam',
    name: {
      es: 'Tostada con manteca y mermelada',
      en: 'Toast with butter and jam',
      fr: 'Toast avec beurre et confiture',
      de: 'Toast mit Butter und Marmelade',
      pt: 'Torrada com manteiga e geleia',
      ca: 'Torrada amb mantega i melmelada'
    },
    description: {
      es: 'Tostada con mantequilla y mermelada',
      en: 'Toast with butter and jam',
      fr: 'Toast avec beurre et confiture',
      de: 'Toast mit Butter und Marmelade',
      pt: 'Torrada com manteiga e geleia',
      ca: 'Torrada amb mantega i melmelada'
    },
    price: 2.50,
    image: 'https://images.pexels.com/photos/5842512/pexels-photo-5842512.jpeg',
    category: 'cafeteria'
  },
  {
    id: 'toast-oil-ham',
    name: {
      es: 'Tostada con oliva, tomate y jamón salado',
      en: 'Toast with olive oil, tomato and cured ham',
      fr: 'Toast avec huile d\'olive, tomate et jambon sec',
      de: 'Toast mit Olivenöl, Tomate und Schinken',
      pt: 'Torrada com azeite, tomate e presunto',
      ca: 'Torrada amb oli, tomàquet i pernil salat'
    },
    description: {
      es: 'Tostada con aceite de oliva, tomate y jamón serrano',
      en: 'Toast with olive oil, tomato and Spanish cured ham',
      fr: 'Toast avec huile d\'olive, tomate et jambon espagnol',
      de: 'Toast mit Olivenöl, Tomate und spanischem Schinken',
      pt: 'Torrada com azeite, tomate e presunto espanhol',
      ca: 'Torrada amb oli d\'oliva, tomàquet i pernil'
    },
    price: 3.50,
    image: 'https://images.pexels.com/photos/4193871/pexels-photo-4193871.jpeg',
    category: 'cafeteria'
  },
  {
    id: 'toast-oil-tomato',
    name: {
      es: 'Tostada con oliva y tomate',
      en: 'Toast with olive oil and tomato',
      fr: 'Toast avec huile d\'olive et tomate',
      de: 'Toast mit Olivenöl und Tomate',
      pt: 'Torrada com azeite e tomate',
      ca: 'Torrada amb oli i tomàquet'
    },
    description: {
      es: 'Tostada con aceite de oliva y tomate rallado',
      en: 'Toast with olive oil and grated tomato',
      fr: 'Toast avec huile d\'olive et tomate râpée',
      de: 'Toast mit Olivenöl und geriebener Tomate',
      pt: 'Torrada com azeite e tomate ralado',
      ca: 'Torrada amb oli d\'oliva i tomàquet ratllat'
    },
    price: 2.20,
    image: 'https://images.pexels.com/photos/5437784/pexels-photo-5437784.jpeg',
    category: 'cafeteria'
  },
  {
    id: 'bizcocho-extra',
    name: {
      es: 'Bizcocho extra',
      en: 'Extra cake',
      fr: 'Gâteau supplémentaire',
      de: 'Extra Kuchen',
      pt: 'Bolo extra',
      ca: 'Coca extra'
    },
    description: {
      es: 'Porción de bizcocho casero',
      en: 'Slice of homemade cake',
      fr: 'Part de gâteau fait maison',
      de: 'Stück hausgemachter Kuchen',
      pt: 'Fatia de bolo caseiro',
      ca: 'Porció de coca casolana'
    },
    price: 2.00,
    image: 'https://images.pexels.com/photos/6487597/pexels-photo-6487597.jpeg',
    category: 'cafeteria'
  },
  
  // Cafés e infusiones
  {
    id: 'coffee-espresso',
    name: {
      es: 'Café solo',
      en: 'Espresso',
      fr: 'Café expresso',
      de: 'Espresso',
      pt: 'Café expresso',
      ca: 'Cafè sol'
    },
    description: {
      es: 'Café espresso',
      en: 'Espresso coffee',
      fr: 'Café expresso',
      de: 'Espresso Kaffee',
      pt: 'Café expresso',
      ca: 'Cafè espresso'
    },
    price: 1.30,
    image: 'https://images.pexels.com/photos/585754/pexels-photo-585754.jpeg',
    category: 'cafeteria'
  },
  {
    id: 'coffee-americano',
    name: {
      es: 'Americano',
      en: 'Americano',
      fr: 'Américain',
      de: 'Americano',
      pt: 'Americano',
      ca: 'Americà'
    },
    description: {
      es: 'Café espresso con agua caliente',
      en: 'Espresso with hot water',
      fr: 'Expresso avec de l\'eau chaude',
      de: 'Espresso mit heißem Wasser',
      pt: 'Café expresso com água quente',
      ca: 'Cafè espresso amb aigua calenta'
    },
    price: 1.50,
    image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg',
    category: 'cafeteria'
  },
  {
    id: 'coffee-with-milk',
    name: {
      es: 'Café con leche',
      en: 'Coffee with milk',
      fr: 'Café au lait',
      de: 'Kaffee mit Milch',
      pt: 'Café com leite',
      ca: 'Cafè amb llet'
    },
    description: {
      es: 'Café con leche caliente',
      en: 'Coffee with hot milk',
      fr: 'Café avec du lait chaud',
      de: 'Kaffee mit heißer Milch',
      pt: 'Café com leite quente',
      ca: 'Cafè amb llet calenta'
    },
    price: 1.80,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    category: 'cafeteria'
  },
  {
    id: 'coffee-cortado',
    name: {
      es: 'Cortado',
      en: 'Cortado',
      fr: 'Cortado',
      de: 'Cortado',
      pt: 'Cortado',
      ca: 'Tallat'
    },
    description: {
      es: 'Café espresso con un poco de leche',
      en: 'Espresso with a small amount of milk',
      fr: 'Expresso avec un peu de lait',
      de: 'Espresso mit einer kleinen Menge Milch',
      pt: 'Café expresso com um pouco de leite',
      ca: 'Cafè espresso amb una mica de llet'
    },
    price: 1.50,
    image: 'https://images.pexels.com/photos/2187531/pexels-photo-2187531.jpeg',
    category: 'cafeteria'
  },
  {
    id: 'coffee-cappuccino',
    name: {
      es: 'Capuchino',
      en: 'Cappuccino',
      fr: 'Cappuccino',
      de: 'Cappuccino',
      pt: 'Cappuccino',
      ca: 'Caputxino'
    },
    description: {
      es: 'Café espresso con leche y espuma de leche',
      en: 'Espresso with milk and milk foam',
      fr: 'Expresso avec du lait et de la mousse de lait',
      de: 'Espresso mit Milch und Milchschaum',
      pt: 'Café expresso com leite e espuma de leite',
      ca: 'Cafè espresso amb llet i escuma de llet'
    },
    price: 2.20,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    category: 'cafeteria'
  },
  {
    id: 'coffee-carajillo',
    name: {
      es: 'Carajillo',
      en: 'Carajillo',
      fr: 'Carajillo',
      de: 'Carajillo',
      pt: 'Carajillo',
      ca: 'Carajillo'
    },
    description: {
      es: 'Café con licor',
      en: 'Coffee with liquor',
      fr: 'Café avec liqueur',
      de: 'Kaffee mit Likör',
      pt: 'Café com licor',
      ca: 'Cafè amb licor'
    },
    price: 2.50,
    image: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg',
    category: 'cafeteria'
  }
];

// Exporta más categorías de productos
export const drinks: MenuItem[] = [
  {
    id: 'soda',
    name: {
      es: 'Lata (cualquier refresco)',
      en: 'Can (any soda)',
      fr: 'Canette (tout soda)',
      de: 'Dose (jedes Erfrischungsgetränk)',
      pt: 'Lata (qualquer refrigerante)',
      ca: 'Llauna (qualsevol refresc)'
    },
    description: {
      es: 'Coca-Cola, Fanta, Sprite, etc.',
      en: 'Coca-Cola, Fanta, Sprite, etc.',
      fr: 'Coca-Cola, Fanta, Sprite, etc.',
      de: 'Coca-Cola, Fanta, Sprite, usw.',
      pt: 'Coca-Cola, Fanta, Sprite, etc.',
      ca: 'Coca-Cola, Fanta, Sprite, etc.'
    },
    price: 2.20,
    image: 'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg',
    category: 'drinks'
  },
  {
    id: 'bitter-kas',
    name: {
      es: 'Bitter Kas',
      en: 'Bitter Kas',
      fr: 'Bitter Kas',
      de: 'Bitter Kas',
      pt: 'Bitter Kas',
      ca: 'Bitter Kas'
    },
    description: {
      es: 'Refresco amargo',
      en: 'Bitter soft drink',
      fr: 'Boisson gazeuse amère',
      de: 'Bitteres Erfrischungsgetränk',
      pt: 'Refrigerante amargo',
      ca: 'Refresc amarg'
    },
    price: 2.30,
    image: 'https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg',
    category: 'drinks'
  },
  {
    id: 'water-small',
    name: {
      es: 'Agua pequeña',
      en: 'Small water',
      fr: 'Petite eau',
      de: 'Kleines Wasser',
      pt: 'Água pequena',
      ca: 'Aigua petita'
    },
    description: {
      es: 'Botella de agua mineral pequeña',
      en: 'Small bottle of mineral water',
      fr: 'Petite bouteille d\'eau minérale',
      de: 'Kleine Flasche Mineralwasser',
      pt: 'Garrafa pequena de água mineral',
      ca: 'Ampolla d\'aigua mineral petita'
    },
    price: 1.50,
    image: 'https://images.pexels.com/photos/3737648/pexels-photo-3737648.jpeg',
    category: 'drinks'
  }
];