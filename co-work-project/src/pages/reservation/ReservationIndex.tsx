import { useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import { data as iphoneData } from '../../data/iphoneData';
import ReserveFooter from '../../components/ReserveFooter';
import ReserveHeader from '../../components/ReserveHeader';
import _ from 'lodash';
import iphone_blue from '../../assets/reserve/iphone-13-blue-select-2021.png';
export enum chooseActionKind {
  CHANGE_MODEL = 'CHANGE_MODEL',
  CHANGE_MEMORY = 'CHANGE_MEMORY',
  CHANGE_PRICE = 'CHANGE_PRICE',
  CHANGE_COLOR = 'CHANGE_COLOR',
  CHANGE_COLORNAME = 'CHANGE_COLORNAME',
  CHANGE_QTY = 'CHANGE_QTY',
  CHANGE_IMG = 'CHANGE_IMG',
}
interface chooseAction {
  type: chooseActionKind;
  payload: number | string;
}

interface variationType {
  color: string;
  colorName: string;
  qty: number;
}
export interface stateType {
  model: string;
  memory: number;
  price: number;
  variation?: variationType[];
}

export interface initialStateType extends stateType {
  color: string;
  colorName: string;
  qty: number;
  img: string;
  prevImg: string;
}

const initialState: initialStateType = {
  model: 'iPhone 13 Mini',
  memory: 128,
  price: 22900,
  color: '#447792',
  colorName: '藍色',
  qty: 5,
  img: iphone_blue,
  prevImg: iphone_blue,
};
export interface ContextType {
  state: initialStateType;
  dispatch: React.Dispatch<chooseAction>;
  iphoneData: stateType[];
}
function reducer(state: stateType[], action: chooseAction) {
  const { type, payload } = action;
  switch (type) {
    case chooseActionKind.CHANGE_MODEL:
      return {
        ...state,
        model: payload,
        memory: 0,
        price: 0,
        color: '',
        colorName: '',
        qty: 0,
      };
    case chooseActionKind.CHANGE_COLOR:
      return {
        ...state,
        color: payload,
      };
    case chooseActionKind.CHANGE_COLORNAME:
      return {
        ...state,
        colorName: payload,
      };
    case chooseActionKind.CHANGE_MEMORY:
      return {
        ...state,
        memory: payload,
      };
    case chooseActionKind.CHANGE_IMG:
      return {
        ...state,
        img: payload,
        prevImg: payload,
      };
    default:
      return state;
  }
}

const ReservationIndex = () => {
  const [state, dispatch] = useReducer(reducer, initialState as never);

  return (
    <div className="flex flex-col h-[100vh]">
      <div className=" flex-grow basis-auto flex-shrink-0">
        <ReserveHeader />
        <Outlet context={{ state, dispatch, iphoneData }} />
      </div>
      <div className=" flex-shrink-0">
        <ReserveFooter />
      </div>
    </div>
  );
};

export default ReservationIndex;
