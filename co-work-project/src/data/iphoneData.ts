interface variation {
  color: string;
  colorName: string;
  qty: number;
}

interface iphone {
  model: string;
  memory: number;
  price: number;
  variation: variation[];
}

const data: iphone[] = [
  {
    model: 'iphone_13_mini',
    memory: 128,
    price: 22900,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_mini',
    memory: 256,
    price: 26400,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_mini',
    memory: 512,
    price: 33400,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13',
    memory: 128,
    price: 25900,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13',
    memory: 256,
    price: 29400,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13',
    memory: 512,
    price: 36400,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_pro',
    memory: 128,
    price: 32900,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_pro',
    memory: 256,
    price: 36400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_pro',
    memory: 512,
    price: 43400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_pro',
    memory: 1000,
    price: 50400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_pro_max',
    memory: 128,
    price: 36900,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_pro_max',
    memory: 256,
    price: 40400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_pro_max',
    memory: 512,
    price: 47400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
      },
    ],
  },
  {
    model: 'iphone_13_pro_max',
    memory: 1000,
    price: 54400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
      },
    ],
  },
];

export { data };
