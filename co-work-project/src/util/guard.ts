import _ from 'lodash';
import { iphone } from '../data/iphoneData';
import { initialStateType } from '../pages/reservation/ReservationIndex';

const isUserValid = (data: any) => {
  const { userEmail, userName, userPhoneNum } = data;
  if (_.isEmpty(userEmail) || _.isEmpty(userName) || _.isEmpty(userPhoneNum)) {
    return false;
  }
  return true;
};
const isProductValid = (data: any) => {
  const { model, memory, color } = data;
  if (_.isEmpty(model) || _.isEmpty(_.toString(memory)) || _.isEmpty(color)) {
    return false;
  }
  return true;
};

const isColorAvailable = (
  model: string,
  memory: number,
  color: string,
  data: iphone[]
) => {
  const target = _.find(
    data,
    (item) => item.model === model && item.memory === memory
  );
  const iphone = _.find(target?.variation, (item) => item.color === color)?.qty;
  if (iphone && iphone > 0) return true;
  return false;
};
const isMemoryAvailable = (
  model: string,
  memory: number,
  color: string,
  data: iphone[]
) => {
  const sameModel = _.filter(data, (item) => item.model === model);
  const sameColor = _.filter(sameModel, (item) => {
    const { variation } = item;
    const target = _.find(variation, (o) => o.color === color);
    return target && target?.qty > 0;
  });
  const iphone = _.find(sameColor as iphone[], (o) => o.memory === memory);
  return !_.isEmpty(iphone);
};

const isFormDataCompelete = (state: initialStateType) => {
  const { userName, userPhoneNum, userEmail } = state;
  const hasName = !_.isEmpty(userName);
  const hasPhoneNum = !_.isEmpty(userPhoneNum);
  const hasEmail = !_.isEmpty(userEmail);
  return hasName && hasPhoneNum && hasEmail;
};

const isProductDataCompelete = (state: initialStateType) => {
  const { model, memory, color } = state;
  const hasName = !_.isEmpty(model);
  const hasPhoneNum = memory > 0;
  const hasEmail = !_.isEmpty(color);
  return hasName && hasPhoneNum && hasEmail;
};

export {
  isUserValid,
  isProductValid,
  isMemoryAvailable,
  isColorAvailable,
  isProductDataCompelete,
  isFormDataCompelete,
};
