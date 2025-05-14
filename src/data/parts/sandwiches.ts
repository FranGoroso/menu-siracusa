import { MenuItem } from '../types/types';

export const sandwichItems: MenuItem[] = [
  // Sandwiches
  {
    id: 'bikini',
    name: {
      es: 'Bikini / Tostado',
      en: 'Bikini / Toasted sandwich',
      fr: 'Croque-monsieur',
      de: 'Bikini / Toast',
      pt: 'Misto quente',
      ca: 'Bikini / Torrat'
    },
    description: {
      es: 'Sándwich de jamón y queso',
      en: 'Ham and cheese sandwich',
      fr: 'Sandwich au jambon et fromage',
      de: 'Schinken-Käse-Sandwich',
      pt: 'Sanduíche de presunto e queijo',
      ca: 'Entrepà de pernil i formatge'
    },
    price: 3.80,
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'bacon-sandwich',
    name: {
      es: 'Bacon',
      en: 'Bacon',
      fr: 'Bacon',
      de: 'Speck',
      pt: 'Bacon',
      ca: 'Bacó'
    },
    description: {
      es: 'Sándwich con bacon crujiente',
      en: 'Sandwich with crispy bacon',
      fr: 'Sandwich avec bacon croustillant',
      de: 'Sandwich mit knusprigem Speck',
      pt: 'Sanduíche com bacon crocante',
      ca: 'Entrepà amb bacó cruixent'
    },
    price: 4.50,
    image: 'https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'tuna-sandwich',
    name: {
      es: 'Atún',
      en: 'Tuna',
      fr: 'Thon',
      de: 'Thunfisch',
      pt: 'Atum',
      ca: 'Tonyina'
    },
    description: {
      es: 'Sándwich de atún con mayonesa',
      en: 'Tuna sandwich with mayonnaise',
      fr: 'Sandwich au thon avec mayonnaise',
      de: 'Thunfisch-Sandwich mit Mayonnaise',
      pt: 'Sanduíche de atum com maionese',
      ca: 'Entrepà de tonyina amb maionesa'
    },
    price: 4.20,
    image: 'https://images.pexels.com/photos/1854037/pexels-photo-1854037.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'chicken-sandwich',
    name: {
      es: 'Pollo',
      en: 'Chicken',
      fr: 'Poulet',
      de: 'Hähnchen',
      pt: 'Frango',
      ca: 'Pollastre'
    },
    description: {
      es: 'Sándwich de pollo a la parrilla',
      en: 'Grilled chicken sandwich',
      fr: 'Sandwich au poulet grillé',
      de: 'Gegrilltes Hähnchen-Sandwich',
      pt: 'Sanduíche de frango grelhado',
      ca: 'Entrepà de pollastre a la graella'
    },
    price: 4.80,
    image: 'https://images.pexels.com/photos/5967859/pexels-photo-5967859.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'loin-sandwich',
    name: {
      es: 'Lomo',
      en: 'Pork loin',
      fr: 'Filet de porc',
      de: 'Schweinelende',
      pt: 'Lombo',
      ca: 'Llom'
    },
    description: {
      es: 'Sándwich de lomo a la plancha',
      en: 'Grilled pork loin sandwich',
      fr: 'Sandwich au filet de porc grillé',
      de: 'Gegrilltes Schweinelenden-Sandwich',
      pt: 'Sanduíche de lombo grelhado',
      ca: 'Entrepà de llom a la planxa'
    },
    price: 4.90,
    image: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'ham-sandwich',
    name: {
      es: 'Jamón York',
      en: 'Ham',
      fr: 'Jambon',
      de: 'Schinken',
      pt: 'Presunto',
      ca: 'Pernil York'
    },
    description: {
      es: 'Sándwich de jamón cocido',
      en: 'Cooked ham sandwich',
      fr: 'Sandwich au jambon cuit',
      de: 'Gekochter Schinken-Sandwich',
      pt: 'Sanduíche de presunto cozido',
      ca: 'Entrepà de pernil cuit'
    },
    price: 4.20,
    image: 'https://images.pexels.com/photos/7390/pexels-photo.jpg',
    category: 'sandwiches'
  },
  {
    id: 'cheese-sandwich',
    name: {
      es: 'Queso',
      en: 'Cheese',
      fr: 'Fromage',
      de: 'Käse',
      pt: 'Queijo',
      ca: 'Formatge'
    },
    description: {
      es: 'Sándwich de queso',
      en: 'Cheese sandwich',
      fr: 'Sandwich au fromage',
      de: 'Käse-Sandwich',
      pt: 'Sanduíche de queijo',
      ca: 'Entrepà de formatge'
    },
    price: 4.10,
    image: 'https://images.pexels.com/photos/3566357/pexels-photo-3566357.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'omelette-sandwich',
    name: {
      es: 'Tortilla',
      en: 'Spanish omelette',
      fr: 'Omelette espagnole',
      de: 'Spanisches Omelett',
      pt: 'Omelete espanhola',
      ca: 'Truita'
    },
    description: {
      es: 'Sándwich de tortilla de patatas',
      en: 'Spanish potato omelette sandwich',
      fr: 'Sandwich à l\'omelette de pommes de terre espagnole',
      de: 'Spanisches Kartoffel-Omelett-Sandwich',
      pt: 'Sanduíche de omelete de batata espanhola',
      ca: 'Entrepà de truita de patates'
    },
    price: 4.50,
    image: 'https://images.pexels.com/photos/4346329/pexels-photo-4346329.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'fuet-sandwich',
    name: {
      es: 'Fuet',
      en: 'Fuet (Catalan sausage)',
      fr: 'Fuet (saucisson catalan)',
      de: 'Fuet (katalanische Wurst)',
      pt: 'Fuet (linguiça catalã)',
      ca: 'Fuet'
    },
    description: {
      es: 'Sándwich de fuet catalán',
      en: 'Catalan fuet sausage sandwich',
      fr: 'Sandwich au fuet catalan',
      de: 'Katalanisches Fuet-Wurst-Sandwich',
      pt: 'Sanduíche de fuet catalão',
      ca: 'Entrepà de fuet català'
    },
    price: 4.30,
    image: 'https://images.pexels.com/photos/6605308/pexels-photo-6605308.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'chorizo-sandwich',
    name: {
      es: 'Chorizo',
      en: 'Chorizo',
      fr: 'Chorizo',
      de: 'Chorizo',
      pt: 'Chouriço',
      ca: 'Xoriço'
    },
    description: {
      es: 'Sándwich de chorizo',
      en: 'Chorizo sandwich',
      fr: 'Sandwich au chorizo',
      de: 'Chorizo-Sandwich',
      pt: 'Sanduíche de chouriço',
      ca: 'Entrepà de xoriço'
    },
    price: 4.30,
    image: 'https://images.pexels.com/photos/5737254/pexels-photo-5737254.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'vegetal-sandwich',
    name: {
      es: 'Vegetal',
      en: 'Vegetable',
      fr: 'Végétal',
      de: 'Gemüse',
      pt: 'Vegetal',
      ca: 'Vegetal'
    },
    description: {
      es: 'Sándwich con lechuga, tomate, zanahoria y más vegetales',
      en: 'Sandwich with lettuce, tomato, carrot and more vegetables',
      fr: 'Sandwich avec laitue, tomate, carotte et plus de légumes',
      de: 'Sandwich mit Salat, Tomate, Karotte und mehr Gemüse',
      pt: 'Sanduíche com alface, tomate, cenoura e mais vegetais',
      ca: 'Entrepà amb enciam, tomàquet, pastanaga i més vegetals'
    },
    price: 4.40,
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'butifarra-sandwich',
    name: {
      es: 'Butifarra',
      en: 'Catalan sausage',
      fr: 'Boutifarre',
      de: 'Katalanische Wurst',
      pt: 'Butifarra',
      ca: 'Botifarra'
    },
    description: {
      es: 'Sándwich con butifarra catalana a la plancha',
      en: 'Sandwich with grilled Catalan sausage',
      fr: 'Sandwich avec boutifarre catalane grillée',
      de: 'Sandwich mit gegrillter katalanischer Wurst',
      pt: 'Sanduíche com butifarra catalã grelhada',
      ca: 'Entrepà amb botifarra catalana a la planxa'
    },
    price: 4.90,
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'siracusa-sandwich',
    name: {
      es: 'Siracusa Sandwich',
      en: 'Siracusa Sandwich',
      fr: 'Sandwich Siracusa',
      de: 'Siracusa Sandwich',
      pt: 'Sanduíche Siracusa',
      ca: 'Siracusa Sandwich'
    },
    description: {
      es: 'Sándwich especial de la casa',
      en: 'House special sandwich',
      fr: 'Sandwich spécial maison',
      de: 'Hausgemachtes Spezial-Sandwich',
      pt: 'Sanduíche especial da casa',
      ca: 'Entrepà especial de la casa'
    },
    price: 6.90,
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'chicken-milanesa',
    name: {
      es: 'Milanesa de pollo (completo)',
      en: 'Chicken Milanesa (complete)',
      fr: 'Milanaise de poulet (complète)',
      de: 'Hähnchenschnitzel (komplett)',
      pt: 'Milanesa de frango (completa)',
      ca: 'Milanesa de pollastre (complet)'
    },
    description: {
      es: 'Sándwich completo de milanesa de pollo con lechuga, tomate y mayonesa',
      en: 'Complete chicken milanesa sandwich with lettuce, tomato and mayonnaise',
      fr: 'Sandwich complet de milanaise de poulet avec laitue, tomate et mayonnaise',
      de: 'Komplettes Hähnchenschnitzel-Sandwich mit Salat, Tomate und Mayonnaise',
      pt: 'Sanduíche completo de milanesa de frango com alface, tomate e maionese',
      ca: 'Entrepà complet de milanesa de pollastre amb enciam, tomàquet i maionesa'
    },
    price: 7.50,
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'cheeseburger',
    name: {
      es: 'Hamburguesa con queso',
      en: 'Cheeseburger',
      fr: 'Hamburger au fromage',
      de: 'Cheeseburger',
      pt: 'Hambúrguer com queijo',
      ca: 'Hamburguesa amb formatge'
    },
    description: {
      es: 'Hamburguesa con queso',
      en: 'Burger with cheese',
      fr: 'Hamburger avec fromage',
      de: 'Burger mit Käse',
      pt: 'Hambúrguer com queijo',
      ca: 'Hamburguesa amb formatge'
    },
    price: 5.90,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'complete-burger',
    name: {
      es: 'Hamburguesa completa',
      en: 'Complete burger',
      fr: 'Hamburger complet',
      de: 'Kompletter Burger',
      pt: 'Hambúrguer completo',
      ca: 'Hamburguesa completa'
    },
    description: {
      es: 'Hamburguesa con queso, lechuga, tomate y cebolla',
      en: 'Burger with cheese, lettuce, tomato and onion',
      fr: 'Hamburger avec fromage, laitue, tomate et oignon',
      de: 'Burger mit Käse, Salat, Tomate und Zwiebel',
      pt: 'Hambúrguer com queijo, alface, tomate e cebola',
      ca: 'Hamburguesa amb formatge, enciam, tomàquet i ceba'
    },
    price: 6.90,
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
    category: 'sandwiches'
  },
  {
    id: 'super-burger',
    name: {
      es: 'Hamburguesa súper',
      en: 'Super burger',
      fr: 'Super hamburger',
      de: 'Super Burger',
      pt: 'Super hambúrguer',
      ca: 'Hamburguesa súper'
    },
    description: {
      es: 'Hamburguesa con doble carne, queso, bacon, huevo y más ingredientes',
      en: 'Burger with double meat, cheese, bacon, egg and more ingredients',
      fr: 'Hamburger avec double viande, fromage, bacon, œuf et plus d\'ingrédients',
      de: 'Burger mit doppeltem Fleisch, Käse, Speck, Ei und weiteren Zutaten',
      pt: 'Hambúrguer com carne dupla, queijo, bacon, ovo e mais ingredientes',
      ca: 'Hamburguesa amb doble carn, formatge, bacó, ou i més ingredients'
    },
    price: 8.90,
    image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg',
    category: 'sandwiches'
  }
];