import classNames from 'classnames';
import _ from 'lodash';
import { useOutletContext } from 'react-router-dom';
import { ContextType } from '../pages/reservation/ReservationIndex';

interface ModelLabelProps {
  name: string;
  color?: string;
}

const ModelLabel = ({ name, color }: ModelLabelProps) => {
  const { state } = useOutletContext<ContextType>();
  
  return (
    <div
      className={classNames({
        'border border-solid border-[#D4D9DE] rounded-[3px] w-fit h-[29px] flex px-[12px] py-[5px] justify-center items-center cursor-pointer':
          true,
        'bg-[#FF5353] text-white':
          name === state.model ||
          name === state.colorName ||
          name === _.toString(state.memory) + 'GB',
      })}
    >
      <h1
        className={classNames({
          'text-[13px] flex whitespace-nowrap': true,
        })}
      >
        {name}
      </h1>
      {color && (
        <div
          className="rounded-full w-[12px] h-[12px]  ml-[5px]"
          style={{ backgroundColor: `${color}` }}
        />
      )}
    </div>
  );
};

export default ModelLabel;
