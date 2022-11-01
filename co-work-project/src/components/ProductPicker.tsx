import _ from 'lodash';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ContextType, stateType } from '../pages/reservation/ReservationIndex';
import ModelLabel from './ModelLabel';

const ProductPicker = () => {
  const { state, dispatch, iphoneData } = useOutletContext<ContextType>();
  function returnTypesArray(data: stateType[]) {
    return _.uniq(_.map(data, (item) => item.model));
  }
  function retrunColorArray(data: stateType[]) {}
  console.log(returnTypesArray(iphoneData));

  return (
    <div>
      <h1 className="text-[13px] mb-[15px]">選擇型號</h1>
      <div className="flex flex-wrap">
        {returnTypesArray(iphoneData).map((name, index) => {
          return (
            <span className="mr-[10px] mb-[10px]">
              <ModelLabel name={name} key={name} />
            </span>
          );
        })}
      </div>
      <h1 className="text-[13px] mb-[15px]">選擇色彩</h1>
      <div className="flex flex-wrap">
        {returnTypesArray(iphoneData).map((name, index) => {
          return (
            <span className="mr-[10px] mb-[10px]">
              <ModelLabel name={name} key={name} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPicker;
