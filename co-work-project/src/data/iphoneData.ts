import iphone_blue from '../assets/reserve/iphone-13-blue-select-2021.png';
import iphone_midnight from '../assets/reserve/iphone-13-midnight-select-2021.png';
import iphone_pink from '../assets/reserve/iphone-13-pink-select-2021.png';
import iphone_red from '../assets/reserve/iphone-13-product-red-select-2021.png';
import iphone_starlight from '../assets/reserve/iphone-13-starlight-select-2021.png';
import iphone_max_blue from '../assets/reserve/iphone-13-pro-max-blue-select.png';
import iphone_max_gold from '../assets/reserve/iphone-13-pro-max-gold-select.png';
import iphone_max_graphite from '../assets/reserve/iphone-13-pro-max-graphite-select.png';
import iphone_max_silver from '../assets/reserve/iphone-13-pro-max-silver-select.png';
interface variation {
  color: string;
  colorName: string;
  qty: number;
  img: string;
}

export interface iphone {
  model: string;
  memory: number;
  price: number;
  variation: variation[];
}

const data: iphone[] = [
  {
    model: 'iPhone 13 Mini',
    memory: 128,
    price: 22900,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 0,
        img: iphone_pink,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
        img: iphone_blue,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
        img: iphone_midnight,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
        img: iphone_starlight,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 0,
        img: iphone_red,
      },
    ],
  },
  {
    model: 'iPhone 13 Mini',
    memory: 256,
    price: 26400,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
        img: iphone_pink,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
        img: iphone_blue,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
        img: iphone_midnight,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
        img: iphone_starlight,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
        img: iphone_red,
      },
    ],
  },
  {
    model: 'iPhone 13 Mini',
    memory: 512,
    price: 33400,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
        img: iphone_pink,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
        img: iphone_blue,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
        img: iphone_midnight,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
        img: iphone_starlight,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
        img: iphone_red,
      },
    ],
  },
  {
    model: 'iPhone 13',
    memory: 128,
    price: 25900,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
        img: iphone_pink,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
        img: iphone_blue,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
        img: iphone_midnight,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
        img: iphone_starlight,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
        img: iphone_red,
      },
    ],
  },
  {
    model: 'iPhone 13',
    memory: 256,
    price: 29400,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
        img: iphone_pink,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
        img: iphone_blue,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
        img: iphone_midnight,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
        img: iphone_starlight,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
        img: iphone_red,
      },
    ],
  },
  {
    model: 'iPhone 13',
    memory: 512,
    price: 36400,
    variation: [
      {
        color: '#fae1dc',
        colorName: '粉紅色',
        qty: 5,
        img: iphone_pink,
      },
      {
        color: '#447792',
        colorName: '藍色',
        qty: 5,
        img: iphone_blue,
      },
      {
        color: '#43484e',
        colorName: '午夜色',
        qty: 5,
        img: iphone_midnight,
      },
      {
        color: '#fbf7f4',
        colorName: '星光色',
        qty: 5,
        img: iphone_starlight,
      },
      {
        color: '#c72232',
        colorName: '紅色',
        qty: 5,
        img: iphone_red,
      },
    ],
  },
  {
    model: 'iPhone 13 Pro',
    memory: 128,
    price: 32900,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
        img: iphone_max_blue,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
        img: iphone_max_silver,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
        img: iphone_max_gold,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
        img: iphone_max_graphite,
      },
    ],
  },
  {
    model: 'iPhone 13 Pro',
    memory: 256,
    price: 36400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
        img: iphone_max_blue,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
        img: iphone_max_silver,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
        img: iphone_max_gold,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
        img: iphone_max_graphite,
      },
    ],
  },
  {
    model: 'iPhone 13 Pro',
    memory: 512,
    price: 43400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
        img: iphone_max_blue,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
        img: iphone_max_silver,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
        img: iphone_max_gold,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
        img: iphone_max_graphite,
      },
    ],
  },
  {
    model: 'iPhone 13 Pro',
    memory: 1000,
    price: 50400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
        img: iphone_max_blue,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
        img: iphone_max_silver,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
        img: iphone_max_gold,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
        img: iphone_max_graphite,
      },
    ],
  },
  {
    model: 'iPhone 13 Pro Max',
    memory: 128,
    price: 36900,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
        img: iphone_max_blue,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
        img: iphone_max_silver,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
        img: iphone_max_gold,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
        img: iphone_max_graphite,
      },
    ],
  },
  {
    model: 'iPhone 13 Pro Max',
    memory: 256,
    price: 40400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
        img: iphone_max_blue,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
        img: iphone_max_silver,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
        img: iphone_max_gold,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
        img: iphone_max_graphite,
      },
    ],
  },
  {
    model: 'iPhone 13 Pro Max',
    memory: 512,
    price: 47400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
        img: iphone_max_blue,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
        img: iphone_max_silver,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
        img: iphone_max_gold,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
        img: iphone_max_graphite,
      },
    ],
  },
  {
    model: 'iPhone 13 Pro Max',
    memory: 1000,
    price: 54400,
    variation: [
      {
        color: '#a9c1d9',
        colorName: '天峰藍色',
        qty: 5,
        img: iphone_max_blue,
      },
      {
        color: '#f1f2ed',
        colorName: '銀色',
        qty: 5,
        img: iphone_max_silver,
      },
      {
        color: '#f9e7cf',
        colorName: '金色',
        qty: 5,
        img: iphone_max_gold,
      },
      {
        color: '#5a5955',
        colorName: '石墨色',
        qty: 5,
        img: iphone_max_graphite,
      },
    ],
  },
];

export { data };
