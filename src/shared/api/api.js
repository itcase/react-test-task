const sizes = [
  { id: 1, name: "XS", number: 44 },
  { id: 2, name: "S", number: 46 },
  { id: 3, name: "M", number: 48 },
  { id: 4, name: "L", number: 50 },
  { id: 5, name: "XL", number: 52 },
  { id: 6, name: "XXL", number: 54 },
];

const categories = [
  { id: 1, name: "Верхняя одежда" },
  { id: 2, name: "Нижняя одежда" },
  { id: 3, name: "Спорт" },
  { id: 4, name: "Аксессуары" },
];

const products = [
  {
    id: 1,
    name: "Футболка",
    categoryId: 1,
    brand: "Basic Club",
    colors: [
      {
        id: 1,
        name: "черный",
        images: ["/images/1/black_front.png", "/images/1/black_back.png"],
        price: "123.00",
        description: 'Описание для "Футболка черный"',
        sizes: [1, 2, 3],
      },
      {
        id: 2,
        name: "белый",
        images: ["/images/1/white_front.png", "/images/1/white_back.png"],
        price: "125.00",
        description: 'Описание для "Футболка белый"',
        sizes: [1, 2, 3, 4, 5, 6],
      },
      {
        id: 3,
        name: "серый",
        images: ["/images/1/gray_front.png", "/images/1/gray_back.png"],
        price: "120.00",
        description: 'Описание для "Футболка серый"',
        sizes: [],
      },
    ],
  },

  {
    id: 2,
    name: "Майка",
    categoryId: 1,
    brand: "Run&Go",
    colors: [
      {
        id: 1,
        name: "желтый",
        images: ["/images/2/yellow_front.png", "/images/2/yellow_back.png"],
        price: "88.00",
        description: 'Описание для "Майка желтый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 2,
        name: "синий",
        images: ["/images/2/blue_front.png", "/images/2/blue_back.png"],
        price: "89.00",
        description: 'Описание для "Майка синий"',
        sizes: [2],
      },
      {
        id: 3,
        name: "черный",
        images: ["/images/2/black_front.png", "/images/2/black_back.png"],
        price: "90.00",
        description: 'Описание для "Майка черный"',
        sizes: [],
      },
    ],
  },

  {
    id: 3,
    name: "Худи",
    categoryId: 1,
    brand: "North Street",
    colors: [
      {
        id: 1,
        name: "черный",
        images: [
          "/images/3/black_front.png",
          "/images/3/black_detail.png",
        ],
        price: "249.00",
        description: 'Описание для "Худи черный"',
        sizes: [3, 4, 5, 6],
      },
      {
        id: 2,
        name: "бежевый",
        images: [
          "/images/3/beige_front.png",
        ],
        price: "239.00",
        description: 'Описание для "Худи бежевый"',
        sizes: [2, 3, 4],
      },
    ],
  },

  {
    id: 4,
    name: "Шорты",
    categoryId: 2,
    brand: "Basic Club",
    colors: [
      {
        id: 1,
        name: "хаки",
        images: ["/images/4/khaki_front.png", "/images/4/khaki_back.png"],
        price: "159.00",
        description: 'Описание для "Шорты хаки"',
        sizes: [2, 3, 4, 5],
      },
      {
        id: 2,
        name: "черный",
        images: ["/images/4/black_front.png", "/images/4/black_back.png"],
        price: "169.00",
        description: 'Описание для "Шорты черный"',
        sizes: [3, 4],
      },
      {
        id: 3,
        name: "серый",
        images: ["/images/4/gray_front.png", "/images/4/gray_back.png"],
        price: "149.00",
        description: 'Описание для "Шорты серый"',
        sizes: [],
      },
    ],
  },

  {
    id: 5,
    name: "Кепка",
    categoryId: 4,
    brand: "North Street",
    colors: [
      {
        id: 1,
        name: "черный",
        images: ["/images/5/black_front.png", "/images/5/black_side.png"],
        price: "59.00",
        description: 'Описание для "Кепка черный"',
        sizes: [3],
      },
      {
        id: 2,
        name: "белый",
        images: ["/images/5/white_front.png", "/images/5/white_side.png"],
        price: "55.00",
        description: 'Описание для "Кепка белый"',
        sizes: [3],
      },
    ],
  },

  {
    id: 6,
    name: "Пальто",
    categoryId: 1,
    brand: "WarmLine",
    colors: [
      {
        id: 1,
        name: "черный",
        images: [
          "/images/6/black_front.png",
          "/images/6/black_back.png",
        ],
        price: "499.00",
        description: 'Описание для "Пальто черный"',
        sizes: [],
      },
      {
        id: 2,
        name: "графит",
        images: [
          "/images/6/graphite_front.png",
          "/images/6/graphite_back.png",
        ],
        price: "519.00",
        description: 'Описание для "Пальто графит"',
        sizes: [],
      },
    ],
  },
];

function getSizes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sizes), 250);
  });
}

function getSize(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const size = sizes.find((size) => String(size.id) === String(id));
      if (size) {
        resolve(size);
      } else {
        reject(new Error("getSize: Size not found"));
      }
    }, 250);
  });
}

function getCategories() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(categories), 250);
  });
}

function getCategory(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const category = categories.find(
        (category) => String(category.id) === String(id),
      );
      if (category) {
        resolve(category);
      } else {
        reject(new Error("getCategory: Category not found"));
      }
    }, 250);
  });
}

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 250);
  });
}

function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(
        (product) => String(product.id) === String(id),
      );
      if (product) {
        resolve(product);
      } else {
        reject(new Error("getProduct: Product not found"));
      }
    }, 250);
  });
}

function getProductColor(productID, colorID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(
        (product) => String(product.id) === String(productID),
      );

      if (!product) {
        return reject(new Error("getProductColor: Product not found"));
      }

      const color = product.colors.find(
        (color) => String(color.id) === String(colorID),
      );

      if (color) {
        resolve(color);
      } else {
        reject(new Error("getProductColor: Color not found"));
      }
    }, 250);
  });
}

export {
  getSizes,
  getSize,
  getCategories,
  getCategory,
  getProducts,
  getProduct,
  getProductColor,
};