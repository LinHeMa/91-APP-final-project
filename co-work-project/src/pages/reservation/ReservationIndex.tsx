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
  CHANGE_USER_NAME = 'CHANGE_USER_NAME',
  CHANGE_USER_PHONE_NUM = 'CHANGE_USER_PHONE_NUM',
  CHANGE_USER_EMAIL = 'CHANGE_USER_EMAIL',
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
  userName: string;
  userPhoneNum: string;
  userEmail: string;
  color: string;
  colorName: string;
  qty: number;
  img: string;
  prevImg: string;
}

const initialState: initialStateType = {
  userName: '',
  userPhoneNum: '',
  userEmail: '',
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
    case chooseActionKind.CHANGE_PRICE:
      return {
        ...state,
        price: payload,
      };
    case chooseActionKind.CHANGE_USER_NAME:
      return {
        ...state,
        userName: payload,
      };
    case chooseActionKind.CHANGE_USER_EMAIL:
      return {
        ...state,
        userEmail: payload,
      };
    case chooseActionKind.CHANGE_USER_PHONE_NUM:
      return {
        ...state,
        userPhoneNum: payload,
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
        <ReserveFooter state={state} />
      </div>
    </div>
  );
};

export default ReservationIndex;
