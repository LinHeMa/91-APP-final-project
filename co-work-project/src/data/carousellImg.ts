import iphone_blue from '../assets/reserve/iphone-13-blue-select-2021.png';
import iphone_midnight from '../assets/reserve/iphone-13-midnight-select-2021.png';
import iphone_pink from '../assets/reserve/iphone-13-pink-select-2021.png';
import iphone_max_blue from '../assets/reserve/iphone-13-pro-max-blue-select.png';
import iphone_max_gold from '../assets/reserve/iphone-13-pro-max-gold-select.png';
import iphone_max_graphite from '../assets/reserve/iphone-13-pro-max-graphite-select.png';
import iphone_max_silver from '../assets/reserve/iphone-13-pro-max-silver-select.png';
import iphone_red from '../assets/reserve/iphone-13-product-red-select-2021.png';
import iphone_max_starlight from '../assets/reserve/iphone-13-starlight-select-2021.png';
import iphone13_all from '../assets/reserve/iPhone13全系列 1.png';
import iphone13_all_2 from '../assets/reserve/iPhone13全系列圖檔.png';

const carousellImg: string[] = [
  iphone_blue,
  iphone_midnight,
  iphone_pink,
  iphone_red,
  iphone_max_blue,
  iphone_max_gold,
  iphone_max_graphite,
  iphone_max_silver,
  iphone_max_starlight,
  iphone13_all,
  iphone13_all_2,
];
interface singleIphoneImgType {
  iphone: string[];
  img: string;
  color: string;
}

const singleIphoneImg: singleIphoneImgType[] = [
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#447792',
    img: iphone_blue,
  },
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#43484e',
    img: iphone_midnight,
  },
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#fae1dc',
    img: iphone_pink,
  },
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#c72232',
    img: iphone_red,
  },
  {
    iphone: ['iPhone 13', 'iPhone 13 Mini'],
    color: '#fbf7f4',
    img: iphone_max_starlight,
  },
  {
    iphone: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    color: '#a9c1d9',
    img: iphone_max_blue,
  },
  {
    iphone: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    color: '#f9e7cf',
    img: iphone_max_gold,
  },
  {
    iphone: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    color: '#5a5955',
    img: iphone_max_graphite,
  },
  {
    iphone: ['iPhone 13 Pro', 'iPhone 13 Pro Max'],
    color: '#f1f2ed',
    img: iphone_max_silver,
  },
];
export default carousellImg;
export { singleIphoneImg };
