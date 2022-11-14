import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useNavigate, useOutletContext } from 'react-router-dom';
import {
  reducerActionKinds,
  ContextType,
} from '../pages/reservation/ReservationIndex';

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { state, dispatch } = useOutletContext<ContextType>();
  const navigate = useNavigate();
  const onSubmit = () => {
    const {
      請輸入姓名: name,
      手機號碼: phoneNum,
      輸入Email: email,
    } = getValues();
    dispatch({ type: reducerActionKinds.CHANGE_USER_NAME, payload: name });
    dispatch({ type: reducerActionKinds.CHANGE_USER_EMAIL, payload: email });
    dispatch({
      type: reducerActionKinds.CHANGE_USER_PHONE_NUM,
      payload: phoneNum,
    });
    navigate('/reservation/product', { state: { ...state } });
  };

  return (
    <div className="bg-white mx-auto  w-full md:border md:border-solid max-w-[1080px] md:border-[#DDDDDD] flex items-center justify-center">
      <form
        className="w-[335px] py-[17px] md:py-[60px]"
        id="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <span className="text-red-500">*</span>姓名
        </div>
        <input
          className={classNames({
            'w-full border h-[40px] border-solid  border-[#DDDDDD] rounded-[5px] py-[9.5px] px-[10px] text-[14px] mt-[10px]':
              true,
            'border-[#ff5353]': errors.請輸入姓名 !== undefined,
          })}
          placeholder="輸入名字"
          {...register('請輸入姓名', {
            required: true,
            minLength: 2,
            maxLength: 7,
            pattern: /[\u4E00-\u9FA5]/i,
          })}
        />
        <p
          className={classNames({
            'text-[13px] text-[#ff5353] mt-1': true,
            hidden: errors.請輸入姓名 === undefined,
          })}
        >
          請輸入中文姓名，限制2~7個字
        </p>
        <div className="mt-[15px]">
          <span className="text-red-500">*</span>手機號碼（須通過簡訊驗證）
        </div>
        <div className="flex  justify-between">
          <select className="w-[116px] h-[40px] text-[#999999] border mr-[5px] bg-[#F4F4F4] border-solid border-[#DDDDDD] rounded-[5px] py-[7px] px-[11px] text-[14px] mt-[10px]">
            <option>+886</option>
          </select>
          <div className="flex grow flex-col">
            <input
              className={classNames({
                'grow border h-[40px] border-solid  border-[#DDDDDD] rounded-[5px] py-[9.5px] px-[10px] text-[14px] mt-[10px]':
                  true,
                'border-[#ff5353]': errors.手機號碼 !== undefined,
              })}
              placeholder="輸入手機號碼"
              maxLength={9}
              {...register('手機號碼', {
                required: true,
                maxLength: 9,
                minLength: 9,
                pattern: /^9[0-9]{8}$/i,
              })}
            />
            <p
              className={classNames({
                'text-[13px] text-[#ff5353] mt-1': true,
                hidden: errors.手機號碼 === undefined,
              })}
            >
              手機號碼格式錯誤，請重新輸入
            </p>
          </div>
        </div>
        <div className="mt-[15px]">
          <span className=" text-red-500">*</span>
          Email信箱（開賣時用此email通知）
        </div>
        <input
          className={classNames({
            'w-full border h-[40px] border-solid  border-[#DDDDDD] rounded-[5px] py-[9.5px] px-[10px] text-[14px] mt-[10px]':
              true,
            'border-[#ff5353]': errors.輸入Email !== undefined,
          })}
          placeholder="輸入Email"
          {...register('輸入Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <p
          className={classNames({
            'text-[13px] text-[#ff5353] mt-1': true,
            hidden: errors.輸入Email === undefined,
          })}
        >
          Email 格式錯誤，請重新輸入
        </p>
        <div className="flex items-center mt-[15px]">
          <input
            type="checkbox"
            {...register('同意', { required: true })}
            className={classNames({
              'mr-[6px] border-[1px] border-[#BBBBBB] rounded-[3px]': true,
              'border-[#ff5353]': errors.同意 !== undefined,
            })}
          />
          <p>
            我已閱讀並同意
            <a className="text-[#428BCA] cursor-pointer">
              隱私權及網站使用條款
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
