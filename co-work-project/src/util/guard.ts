import _ from 'lodash';

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
export { isUserValid, isProductValid };
