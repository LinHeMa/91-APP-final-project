import iphone_blue from '../assets/reserve/iphone-13-blue-select-2021.png';
import iphone_midnight from '../assets/reserve/iphone-13-midnight-select-2021.png';
import iphone_pink from '../assets/reserve/iphone-13-pink-select-2021.png';
import iphone_max_blue from '../assets/reserve/iphone-13-pro-max-blue-select.png';
import iphone_max_gold from '../assets/reserve/iphone-13-pro-max-gold-select.png';
import iphone_max_graphite from '../assets/reserve/iphone-13-pro-max-graphite-select.png';
import iphone_max_silver from '../assets/reserve/iphone-13-pro-max-silver-select.png';
import iphone_red from '../assets/reserve/iphone-13-product-red-select-2021.png';
import iphone_max_starlight from '../assets/reserve/iphone-13-starlight-select-2021.png';
import iphone13_all_2 from '../assets/reserve/iPhone13全系列圖檔.png';
import iphone_blue_webp from '../assets/reserve/iphone-13-blue-select-2021.webp';
import iphone_midnight_webp from '../assets/reserve/iphone-13-midnight-select-2021.webp';
import iphone_pink_webp from '../assets/reserve/iphone-13-pink-select-2021.webp';
import iphone_max_blue_webp from '../assets/reserve/iphone-13-pro-max-blue-select.webp';
import iphone_max_gold_webp from '../assets/reserve/iphone-13-pro-max-gold-select.webp';
import iphone_max_graphite_webp from '../assets/reserve/iphone-13-pro-max-graphite-select.webp';
import iphone_max_silver_webp from '../assets/reserve/iphone-13-pro-max-silver-select.webp';
import iphone_red_webp from '../assets/reserve/iphone-13-product-red-select-2021.webp';
import iphone_max_starlight_webp from '../assets/reserve/iphone-13-starlight-select-2021.webp';
import iphone13_all_2_webp from '../assets/reserve/iPhone13全系列圖檔.webp';

export interface carousellImgType {
  png: string;
  webp: string;
}

const carousellImg: string[] = [
  iphone_blue_webp,
  iphone_midnight_webp,
  iphone_pink_webp,
  iphone_red_webp,
  iphone_max_blue_webp,
  iphone_max_gold_webp,
  iphone_max_graphite_webp,
  iphone_max_silver_webp,
  iphone_max_starlight_webp,
  iphone13_all_2_webp,
];

const carousellImgWebp: carousellImgType[] = [
  { webp: iphone_blue_webp, png: iphone_blue },
  { webp: iphone_midnight_webp, png: iphone_midnight },
  { webp: iphone_pink_webp, png: iphone_pink },
  { webp: iphone_red_webp, png: iphone_red },
  { webp: iphone_max_blue_webp, png: iphone_max_blue },
  { webp: iphone_max_gold_webp, png: iphone_max_gold },
  { webp: iphone_max_graphite_webp, png: iphone_max_graphite },
  { webp: iphone_max_silver_webp, png: iphone_max_silver },
  { webp: iphone_max_starlight_webp, png: iphone_max_starlight },
  { webp: iphone13_all_2_webp, png: iphone13_all_2 },
];
interface singleIphoneImgType {
  iphone: string[];
  img: string;
  color: string;
  colorName: string;
}

const singleIphoneImg: singleIphoneImgType[] = [
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#447792',
    colorName: '藍色',
    img: iphone_blue,
  },
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#43484e',
    colorName: '午夜色',
    img: iphone_midnight,
  },
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#fae1dc',
    colorName: '粉紅色',
    img: iphone_pink,
  },
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#c72232',
    colorName: '紅色',
    img: iphone_red,
  },
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#fbf7f4',

    colorName: '星光色',
    img: iphone_max_starlight,
  },
  {
    iphone: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    color: '#a9c1d9',
    colorName: '天峰藍色',
    img: iphone_max_blue,
  },
  {
    iphone: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    color: '#f9e7cf',
    colorName: '金色',
    img: iphone_max_gold,
  },
  {
    iphone: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    color: '#5a5955',
    colorName: '石墨色',
    img: iphone_max_graphite,
  },
  {
    iphone: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    color: '#f1f2ed',
    colorName: '銀色',
    img: iphone_max_silver,
  },
];
export default carousellImg;
export { singleIphoneImg, carousellImgWebp };
