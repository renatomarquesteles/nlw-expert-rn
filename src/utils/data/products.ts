const MENU = [
  {
    title: 'Meal of the day',
    data: [
      {
        id: '1',
        title: 'X-React',
        price: 24.9,
        description:
          'A hamburger so beautiful that it made me hungry while I was making this layout for the project...',
        cover: require('../../assets/products/cover/1.png'),
        thumbnail: require('../../assets/products/thumbnail/1.png'),
        ingredients: [
          'Brioche bread;',
          '2x meat smash (house blend) 80g;',
          'Cheddar cheese;',
          'Lettuce;',
          'Tomato;',
          'Pickles;',
          'Onion;',
          'House sauce;',
        ],
      },
    ],
  },
  {
    title: 'Hot Deals',
    data: [
      {
        id: '2',
        title: 'X-JavaScript',
        price: 34.9,
        description:
          "The ingredients in this burger change every week, so you're always in for a surprise...",
        cover: require('../../assets/products/cover/2.png'),
        thumbnail: require('../../assets/products/thumbnail/2.png'),
        ingredients: [
          'Brioche bread;',
          '2x meat smash (house blend) 80g;',
          'Cheddar cheese;',
          'Lettuce;',
          'Tomato;',
          'Pickles;',
          'Onion;',
          'House sauce;',
        ],
      },
      {
        id: '3',
        title: 'X-Cobol',
        price: 32.7,
        description:
          "That burger that we can't take off the menu due to the burger restaurant's older customers...",
        cover: require('../../assets/products/cover/3.png'),
        thumbnail: require('../../assets/products/thumbnail/3.png'),
        ingredients: [
          'Brioche bread;',
          '2x meat smash (house blend) 80g;',
          'Cheddar cheese;',
          'Lettuce;',
          'Tomato;',
          'Pickles;',
          'Onion;',
          'House sauce;',
        ],
      },
      {
        id: '4',
        title: 'X-Tailwind',
        price: 29.9,
        description:
          "The one you don't like at first, but then you get hooked and can't put it down...",
        cover: require('../../assets/products/cover/4.png'),
        thumbnail: require('../../assets/products/thumbnail/4.png'),
        ingredients: [
          'Brioche bread;',
          '2x meat smash (house blend) 80g;',
          'Cheddar cheese;',
          'Lettuce;',
          'Tomato;',
          'Pickles;',
          'Onion;',
          'House sauce;',
        ],
      },
    ],
  },
  {
    title: 'Desserts',
    data: [
      {
        id: '5',
        title: 'Ice Cream with Brownie',
        price: 18.9,
        description:
          'A delicious dessert to enjoy. Choose the ice cream and syrup you want...',
        cover: require('../../assets/products/cover/5.png'),
        thumbnail: require('../../assets/products/thumbnail/5.png'),
        ingredients: [
          '1x Brownie;',
          '1x scoop of ice cream of your choice',
          'Choose your syrup;',
        ],
      },
      {
        id: '6',
        title: 'Cupcake',
        price: 22.9,
        description: 'A delicious Cupcake. Choose the flavor you like...',
        cover: require('../../assets/products/cover/6.png'),
        thumbnail: require('../../assets/products/thumbnail/6.png'),
        ingredients: ['Choose flavor;', 'Whipped cream;'],
      },
    ],
  },
  {
    title: 'Drinks',
    data: [
      {
        id: '7',
        title: 'Coca-Cola',
        price: 6.9,
        thumbnail: require('../../assets/products/thumbnail/7.png'),
        cover: require('../../assets/products/cover/7.png'),
        description: 'A super cold coke to accompany your super snack...',
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
