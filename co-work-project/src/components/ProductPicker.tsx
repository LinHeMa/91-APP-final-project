import _ from 'lodash';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  chooseActionKind,
  ContextType,
  stateType,
} from '../pages/reservation/ReservationIndex';
import ModelLabel from './ModelLabel';

const ProductPicker = () => {
  const { state, dispatch, iphoneData } = useOutletContext<ContextType>();
  function returnTypesArray(data: stateType[]) {
    return _.uniq(_.map(data, (item) => item.model));
  }
  function retrunColorArray(data: stateType[], filter: string) {
    return _.filter(data, { model: filter })[0].variation;
  }
  function retrunMemoryArray(data: stateType[], filter: string) {
    return _.map(_.filter(data, { model: filter }), (item) => item.memory);
  }
  const price = _.filter(iphoneData, (item) => {
    return item.model === state.model && item.memory === state.memory;
  })[0]?.price;

  useEffect(() => {
    if (!price || price === 0) return;
    dispatch({ type: chooseActionKind.CHANGE_PRICE, payload: price });
  }, [state.model, state.memory]);
  return (
    <div className="w-full md:max-w-[376px] px-4 md:px-0">
      <h1 className="text-[16px] leading-[23px]">APPLE {state.model}</h1>
      <h2 className="text-[#FF5353] text-[20px] leading-[29px] mt-[19px]">
        NT${price || 0}
      </h2>
      <p className="text-[#FF5353] text-[14px]">
        登記的手機號碼需與會員手機號碼相同，每人限購一支
        一經送出商品選項，不得修改
      </p>
      <h1 className="text-[13px] mb-[15px] font-bold mt-[14px]">選擇型號</h1>
      <div className="flex flex-wrap">
        {returnTypesArray(iphoneData).map((name, index) => {
          return (
            <span
              className="mr-[10px] mb-[10px]"
              key={index}
              onClick={() => {
                dispatch({
                  type: chooseActionKind.CHANGE_MODEL,
                  payload: name,
                });
              }}
            >
              <ModelLabel name={name} key={name} />
            </span>
          );
        })}
      </div>
      <h1 className="text-[13px] mb-[15px]">選擇色彩</h1>
      <div className="flex flex-wrap">
        {retrunColorArray(iphoneData, state.model)?.map((variation, index) => {
          const { color, colorName } = variation;
          return (
            <span
              className="mr-[10px] mb-[10px]"
              onClick={() => {
                dispatch({
                  type: chooseActionKind.CHANGE_COLORNAME,
                  payload: colorName,
                });
                dispatch({
                  type: chooseActionKind.CHANGE_COLOR,
                  payload: color,
                });
              }}
            >
              <ModelLabel name={colorName} key={color} color={color} />
            </span>
          );
        })}
      </div>
      <h1 className="text-[13px] mb-[15px]">選擇容量</h1>
      <div className="flex flex-wrap">
        {retrunMemoryArray(iphoneData, state.model)?.map((memory, index) => {
          return (
            <span
              className="mr-[10px] mb-[10px]"
              onClick={() => {
                dispatch({
                  type: chooseActionKind.CHANGE_MEMORY,
                  payload: memory,
                });
              }}
            >
              <ModelLabel name={_.toString(memory) + 'GB'} key={memory} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPicker;
