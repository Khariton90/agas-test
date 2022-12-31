export const products = [
  {
    id: 1,
    previewImage: require('@/assets/products/cabbage.png'),
    rating: 4.9,
    like: false,
    title: 'Капуста',
    price: 25,
    weight: 1,
    set: false,
    avialable: 1,
    description: 'Эта коробка идеально подходит для тех, кто находится в дороге. В ней фрукты и овощи.',
    user: {
      id: 1,
      avatar: require('@/assets/users/dmitry.png'),
      firstname: 'Дмитрий',
      lastname: 'Анатольевич'
    }
  },
  {
    id: 2,
    previewImage: require('@/assets/products/strawberry.png'),
    rating: 4.9,
    like: true,
    title: 'Клубника',
    price: 230,
    weight: 0.1,
    set: false,
    avialable: 1,
    description: 'Эта коробка идеально подходит для тех, кто находится в дороге. В ней фрукты и овощи.',
    user: {
      id: 2,
      avatar: require('@/assets/users/darya.png'),
      firstname: 'Дарья',
      lastname: 'Дмитриева'
    }
  },
  {
    id: 3,
    previewImage: require('@/assets/products/mixed-set.png'),
    rating: 5,
    like: true,
    title: 'Смешанный набор',
    price: 2340,
    weight: null,
    set: true,
    avialable: 1,
    description: 'Наша самая популярная услуга, эта коробка — отличный выбор для семей и людей, которые любят свежие фрукты и любят готовить.',
    user: {
      id: 3,
      avatar: require('@/assets/users/lubov.png'),
      firstname: 'Любовь',
      lastname: 'Спицына'
    }
  },
  {
    id: 4,
    previewImage: require('@/assets/products/cucumbers.png'),
    rating: 5,
    like: true,
    title: 'Огурцы гладкие',
    price: 60,
    weight: 1,
    set: false,
    avialable: 1,
    description: 'Наша самая популярная услуга, эта коробка — отличный выбор для семей и людей, которые любят свежие фрукты и любят готовить.',
    user: {
      id: 3,
      avatar: require('@/assets/users/lubov.png'),
      firstname: 'Любовь',
      lastname: 'Спицына'
    }
  },
  {
    id: 5,
    previewImage: require('@/assets/products/blueberry.png'),
    rating: 4.9,
    like: true,
    title: 'Голубика',
    price: 105,
    weight: 1,
    set: false,
    avialable: 1,
    description: 'Наша традиционная коробка CSA — это самая местная сезонная смесь, которую вы можете найти.',
    user: {
      id: 2,
      avatar: require('@/assets/users/darya.png'),
      firstname: 'Дарья',
      lastname: 'Дмитриева'
    }
  },
  {
    id: 6,
    previewImage: require('@/assets/products/no-cooking.png'),
    rating: 4.9,
    like: false,
    title: 'Никакой готовки',
    price: 1057,
    weight: null,
    set: true,
    avialable: 1,
    description: 'Эта коробка идеально подходит для тех, кто находится в дороге. В ней фрукты и овощи.',
    user: {
      id: 1,
      avatar: require('@/assets/users/dmitry.png'),
      firstname: 'Дмитрий',
      lastname: 'Анатольевич'
    }
  },
]