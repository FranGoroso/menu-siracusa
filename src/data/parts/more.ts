import { MenuItem } from '../types/types';

export const iberianHamItems: MenuItem[] = [
  // Pernil Ibérico
  {
    id: 'iberian-ham-montadito',
    name: {
      es: 'Montadito',
      en: 'Small bread with ham',
      fr: 'Petit pain avec jambon',
      de: 'Kleines Brot mit Schinken',
      pt: 'Pequeno pão com presunto',
      ca: 'Montadito'
    },
    description: {
      es: 'Pequeña rebanada de pan con jamón ibérico',
      en: 'Small slice of bread with Iberian ham',
      fr: 'Petite tranche de pain avec jambon ibérique',
      de: 'Kleine Brotscheibe mit iberischem Schinken',
      pt: 'Pequena fatia de pão com presunto ibérico',
      ca: 'Petita llesca de pa amb pernil ibèric'
    },
    price: 3.50,
    image: 'https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg',
    category: 'iberianHam'
  },
  {
    id: 'iberian-ham-toast',
    name: {
      es: 'Tostada',
      en: 'Toast',
      fr: 'Toast',
      de: 'Toast',
      pt: 'Torrada',
      ca: 'Torrada'
    },
    description: {
      es: 'Tostada con jamón ibérico',
      en: 'Toast with Iberian ham',
      fr: 'Toast avec jambon ibérique',
      de: 'Toast mit iberischem Schinken',
      pt: 'Torrada com presunto ibérico',
      ca: 'Torrada amb pernil ibèric'
    },
    price: 4.50,
    image: 'https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg',
    category: 'iberianHam'
  },
  {
    id: 'iberian-ham-portion',
    name: {
      es: 'Ración',
      en: 'Portion',
      fr: 'Portion',
      de: 'Portion',
      pt: 'Porção',
      ca: 'Ració'
    },
    description: {
      es: 'Ración de jamón ibérico',
      en: 'Portion of Iberian ham',
      fr: 'Portion de jambon ibérique',
      de: 'Portion iberischen Schinken',
      pt: 'Porção de presunto ibérico',
      ca: 'Ració de pernil ibèric'
    },
    price: 12.50,
    image: 'https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg',
    category: 'iberianHam'
  }
];

export const otherDrinkItems: MenuItem[] = [
  // Otras Bebidas
  {
    id: 'drink-mixed',
    name: {
      es: 'Cubata (fernet, gin-tonic, ron-cola, whisky-cola, etc.)',
      en: 'Mixed drink (fernet, gin-tonic, rum-cola, whisky-cola, etc.)',
      fr: 'Cocktail (fernet, gin-tonic, rhum-cola, whisky-cola, etc.)',
      de: 'Mixgetränk (Fernet, Gin-Tonic, Rum-Cola, Whisky-Cola, usw.)',
      pt: 'Drink (fernet, gin-tonic, rum-cola, whisky-cola, etc.)',
      ca: 'Cubata (fernet, gin-tonic, rom-cola, whisky-cola, etc.)'
    },
    description: {
      es: 'Bebida combinada',
      en: 'Mixed drink',
      fr: 'Boisson mélangée',
      de: 'Gemischtes Getränk',
      pt: 'Bebida misturada',
      ca: 'Beguda combinada'
    },
    price: 7.50,
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg',
    category: 'otherDrinks'
  },
  {
    id: 'drink-bombay-gintonic',
    name: {
      es: 'Gin Tonic Bombay',
      en: 'Bombay Gin Tonic',
      fr: 'Gin Tonic Bombay',
      de: 'Bombay Gin Tonic',
      pt: 'Gin Tonic Bombay',
      ca: 'Gin Tonic Bombay'
    },
    description: {
      es: 'Gin Tonic con ginebra Bombay',
      en: 'Gin Tonic with Bombay gin',
      fr: 'Gin Tonic avec gin Bombay',
      de: 'Gin Tonic mit Bombay Gin',
      pt: 'Gin Tonic com gin Bombay',
      ca: 'Gin Tonic amb ginebra Bombay'
    },
    price: 9.00,
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg',
    category: 'otherDrinks'
  },
  {
    id: 'drink-whisky',
    name: {
      es: 'Whisky',
      en: 'Whisky',
      fr: 'Whisky',
      de: 'Whisky',
      pt: 'Whisky',
      ca: 'Whisky'
    },
    description: {
      es: 'Vaso de whisky',
      en: 'Glass of whisky',
      fr: 'Verre de whisky',
      de: 'Glas Whisky',
      pt: 'Copo de whisky',
      ca: 'Got de whisky'
    },
    price: 6.50,
    image: 'https://images.pexels.com/photos/5947028/pexels-photo-5947028.jpeg',
    category: 'otherDrinks'
  },
  {
    id: 'drink-liqueur',
    name: {
      es: 'Copa licor',
      en: 'Liqueur glass',
      fr: 'Verre de liqueur',
      de: 'Likör-Glas',
      pt: 'Copo de licor',
      ca: 'Copa licor'
    },
    description: {
      es: 'Copa de licor',
      en: 'Glass of liqueur',
      fr: 'Verre de liqueur',
      de: 'Glas Likör',
      pt: 'Copo de licor',
      ca: 'Copa de licor'
    },
    price: 4.50,
    image: 'https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg',
    category: 'otherDrinks'
  },
  {
    id: 'drink-porto',
    name: {
      es: 'Oporto',
      en: 'Porto',
      fr: 'Porto',
      de: 'Porto',
      pt: 'Porto',
      ca: 'Porto'
    },
    description: {
      es: 'Copa de vino de Oporto',
      en: 'Glass of Porto wine',
      fr: 'Verre de vin de Porto',
      de: 'Glas Portwein',
      pt: 'Copo de vinho do Porto',
      ca: 'Copa de vi de Porto'
    },
    price: 4.00,
    image: 'https://images.pexels.com/photos/8034835/pexels-photo-8034835.jpeg',
    category: 'otherDrinks'
  },
  {
    id: 'drink-martini',
    name: {
      es: 'Martini',
      en: 'Martini',
      fr: 'Martini',
      de: 'Martini',
      pt: 'Martini',
      ca: 'Martini'
    },
    description: {
      es: 'Copa de Martini',
      en: 'Glass of Martini',
      fr: 'Verre de Martini',
      de: 'Glas Martini',
      pt: 'Copo de Martini',
      ca: 'Copa de Martini'
    },
    price: 4.00,
    image: 'https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg',
    category: 'otherDrinks'
  },
  {
    id: 'drink-beer-martini',
    name: {
      es: 'Cerveza con Martini',
      en: 'Beer with Martini',
      fr: 'Bière avec Martini',
      de: 'Bier mit Martini',
      pt: 'Cerveja com Martini',
      ca: 'Cervesa amb Martini'
    },
    description: {
      es: 'Combinado de cerveza con Martini',
      en: 'Beer mixed with Martini',
      fr: 'Mélange de bière et de Martini',
      de: 'Bier gemischt mit Martini',
      pt: 'Cerveja misturada com Martini',
      ca: 'Combinat de cervesa amb Martini'
    },
    price: 4.50,
    image: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg',
    category: 'otherDrinks'
  },
  {
    id: 'drink-tinto-verano',
    name: {
      es: 'Tinto de verano',
      en: 'Summer red wine',
      fr: 'Vin rouge d\'été',
      de: 'Sommerrotwein',
      pt: 'Vinho tinto de verão',
      ca: 'Vi negre d\'estiu'
    },
    description: {
      es: 'Vino tinto con gaseosa',
      en: 'Red wine with soda',
      fr: 'Vin rouge avec soda',
      de: 'Rotwein mit Soda',
      pt: 'Vinho tinto com refrigerante',
      ca: 'Vi negre amb gasosa'
    },
    price: 3.50,
    image: 'https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg',
    category: 'otherDrinks'
  },
  {
    id: 'drink-shot',
    name: {
      es: 'Chupito',
      en: 'Shot',
      fr: 'Shot',
      de: 'Shot',
      pt: 'Shot',
      ca: 'Xupito'
    },
    description: {
      es: 'Chupito de licor',
      en: 'Shot of liquor',
      fr: 'Shot de liqueur',
      de: 'Shot Likör',
      pt: 'Shot de licor',
      ca: 'Xupito de licor'
    },
    price: 2.50,
    image: 'https://images.pexels.com/photos/607599/pexels-photo-607599.jpeg',
    category: 'otherDrinks'
  }
];

export const moreItems: MenuItem[] = [
  // Lunch
  {
    id: 'lunch-loin',
    name: {
      es: 'Lomo con patatas y ensalada',
      en: 'Pork loin with fries and salad',
      fr: 'Filet de porc avec frites et salade',
      de: 'Schweinelende mit Pommes und Salat',
      pt: 'Lombo com batatas fritas e salada',
      ca: 'Llom amb patates i amanida'
    },
    description: {
      es: 'Lomo a la plancha con guarnición de patatas fritas y ensalada fresca',
      en: 'Grilled pork loin with a side of french fries and fresh salad',
      fr: 'Filet de porc grillé avec accompagnement de frites et salade fraîche',
      de: 'Gegrillte Schweinelende mit Beilage von Pommes und frischem Salat',
      pt: 'Lombo grelhado com guarnição de batatas fritas e salada fresca',
      ca: 'Llom a la planxa amb guarnició de patates fregides i amanida fresca'
    },
    price: 9.90,
    image: 'https://images.pexels.com/photos/262977/pexels-photo-262977.jpeg',
    category: 'lunch'
  },
  {
    id: 'lunch-chicken',
    name: {
      es: 'Pechuga de pollo con patatas y ensalada',
      en: 'Chicken breast with fries and salad',
      fr: 'Poitrine de poulet avec frites et salade',
      de: 'Hähnchenbrust mit Pommes und Salat',
      pt: 'Peito de frango com batatas fritas e salada',
      ca: 'Pit de pollastre amb patates i amanida'
    },
    description: {
      es: 'Pechuga de pollo a la plancha con guarnición de patatas fritas y ensalada fresca',
      en: 'Grilled chicken breast with a side of french fries and fresh salad',
      fr: 'Poitrine de poulet grillée avec accompagnement de frites et salade fraîche',
      de: 'Gegrillte Hähnchenbrust mit Beilage von Pommes und frischem Salat',
      pt: 'Peito de frango grelhado com guarnição de batatas fritas e salada fresca',
      ca: 'Pit de pollastre a la planxa amb guarnició de patates fregides i amanida fresca'
    },
    price: 9.50,
    image: 'https://images.pexels.com/photos/262977/pexels-photo-262977.jpeg',
    category: 'lunch'
  },
  
  // Juice
  {
    id: 'juice-glass',
    name: {
      es: 'Vaso (naranja, piña, melocotón)',
      en: 'Glass (orange, pineapple, peach)',
      fr: 'Verre (orange, ananas, pêche)',
      de: 'Glas (Orange, Ananas, Pfirsich)',
      pt: 'Copo (laranja, abacaxi, pêssego)',
      ca: 'Got (taronja, pinya, préssec)'
    },
    description: {
      es: 'Zumo en vaso',
      en: 'Juice in glass',
      fr: 'Jus en verre',
      de: 'Saft im Glas',
      pt: 'Suco em copo',
      ca: 'Suc en got'
    },
    price: 2.20,
    image: 'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg',
    category: 'juices'
  },
  {
    id: 'fresh-orange-juice',
    name: {
      es: 'Naranja natural',
      en: 'Fresh orange juice',
      fr: 'Jus d\'orange frais',
      de: 'Frischer Orangensaft',
      pt: 'Suco de laranja natural',
      ca: 'Taronja natural'
    },
    description: {
      es: 'Zumo de naranja recién exprimido',
      en: 'Freshly squeezed orange juice',
      fr: 'Jus d\'orange fraîchement pressé',
      de: 'Frisch gepresster Orangensaft',
      pt: 'Suco de laranja recém-espremido',
      ca: 'Suc de taronja acabat d\'esprémer'
    },
    price: 3.20,
    image: 'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg',
    category: 'juices'
  }
];