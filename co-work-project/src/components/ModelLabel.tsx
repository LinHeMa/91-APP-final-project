import classNames from 'classnames';
import _ from 'lodash';
import { useOutletContext } from 'react-router-dom';
import { ContextType } from '../pages/reservation/ReservationIndex';
import { isColorAvailable, isMemoryAvailable } from '../util/guard';
import { data } from '../data/iphoneData';
interface ModelLabelProps {
  name: string;
  color?: string;
  memory?: number;
}

const ModelLabel = ({ name, color, memory }: ModelLabelProps) => {
  const canMemoryBeChoose = (memory: number) => {
    if (!memory) return true;
    return isMemoryAvailable(state.model, memory!, state.color, data);
  };
  const { state } = useOutletContext<ContextType>();
  return (
    <div
      className={classNames({
        'border border-solid border-[#D4D9DE] rounded-[3px] w-fit h-[29px] flex px-[12px] py-[5px] justify-center items-center cursor-pointer':
          true,
        'bg-[#FF5353] text-white':
          (name === state.model ||
            name === state.colorName ||
            name === _.toString(state.memory) + 'GB') &&
          canMemoryBeChoose(memory!),
        'cursor-not-allowed bg-[#D4D9DE] opacity-50': !canMemoryBeChoose(
          memory!
        ),
      })}
    >
      <h1
        className={classNames({
          'text-[13px] flex whitespace-nowrap': true,
        })}
      >
        {name === '1000GB' ? '1TB' : name}
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
