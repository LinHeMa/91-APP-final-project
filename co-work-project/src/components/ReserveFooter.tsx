import classNames from 'classnames';
import _ from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBoolean } from 'usehooks-ts';
import { stateType } from '../pages/reservation/ReservationIndex';
import { isProductValid, isUserValid } from '../util/guard';
import AlertPopup from './AlertPopup';
interface ReserveFooterProps {
  state: stateType[];
}
const ReserveFooter = ({ state }: ReserveFooterProps) => {
  const pathName = useLocation();
  const { price } = state as unknown as stateType;
  const pathArray = _.split(pathName.pathname, '/');
  const firstPathName = pathArray[1];
  const secondPathName = pathArray[2];
  const navigate = useNavigate();
  const { setTrue, setFalse, value: isOpen } = useBoolean(false);
  console.log(state,!isUserValid(state) || !isProductValid(state),!isUserValid(state),!isProductValid(state),)
  const handleClick = (path: string) => {
    switch (path) {
      case 'submitform': {
        if (!isUserValid(state)) return;
        navigate('/reservation/product', { replace: true });
        break;
      }
      case 'product': {
        if (!isUserValid(state) || !isProductValid(state)) {
          setTrue();
          return;
        }
        navigate('/reservation/successpage', { replace: true });
        break;
      }
      case 'successpage': {
        navigate('/reservation', { replace: true });
        break;
      }
      default: {
        navigate('/reservation/submitform', { replace: true });
        break;
      }
    }
  };
  const footerText = (path: string) => {
    switch (path) {
      case 'submitform': {
        return '';
      }
      case 'product': {
        return '一經送出商品，不得修改';
      }
      case 'successpage': {
        return '立刻加入會員，購買通知不漏接';
      }
      default: {
        break;
      }
    }
  };

  const footerButtonText = (path: string) => {
    switch (path) {
      case 'submitform': {
        return '選擇商品';
      }
      case 'product': {
        return '送出';
      }
      case 'successpage': {
        return '加入會員';
      }
      default: {
        return '搶先登記';
      }
    }
  };

  return (
    <footer className="flex-col w-[100vw] bg-white flex  justify-center items-center drop-shadow-sm flex-shrink-0">
      <AlertPopup isOpen={isOpen} close={setFalse} />
      <p
        className={classNames({
          'w-[85%] flex items-center my-[10px] text-[#FF5353] max-w-[1080px]':
            true,
          'justify-between': secondPathName === 'product',
          'justify-center': secondPathName === 'successpage',
        })}
      >
        {footerText(secondPathName)}
        <span className={classNames({ hidden: secondPathName !== 'product' })}>
          ${price}
        </span>
      </p>
      <button
        form="form"
        type={secondPathName === 'submitform' ? 'submit' : 'button'}
        id="form"
        onClick={_.debounce((e) => {
          e.stopPropagation();
          handleClick(secondPathName);
        }, 500)}
        className="cursor-pointer w-[85%] h-[40px] md:h-[50px] mb-[14px] bg-[#FF5353] rounded-[5px] flex justify-center items-center text-white max-w-[1080px]"
      >
        {footerButtonText(secondPathName)}
      </button>
    </footer>
  );
};

export default ReserveFooter;
