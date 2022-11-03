import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log(getValues());
  };
  console.log(errors);

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
          className="w-full border h-[40px] border-solid border-[#DDDDDD] rounded-[5px] py-[9.5px] px-[10px] text-[14px] mt-[10px]"
          placeholder="輸入名字"
          {...register('請輸入姓名', {
            required: true,
            minLength: 2,
            maxLength: 7,
            pattern: /[\u4E00-\u9FA5]/i,
          })}
        />
        <div className="mt-[15px]">
          <span className="text-red-500">*</span>手機號碼（須通過簡訊驗證）
        </div>
        <div className="flex items-center justify-center">
          <select className="w-[116px] h-[40px] text-[#999999] border mr-[5px] bg-[#F4F4F4] border-solid border-[#DDDDDD] rounded-[5px] py-[7px] px-[11px] text-[14px] mt-[10px]">
            <option>+886</option>
          </select>
          <input
            className="w-full border h-[40px] border-solid border-[#DDDDDD] rounded-[5px] py-[9.5px] px-[10px] text-[14px] mt-[10px]"
            placeholder="輸入手機號碼"
            maxLength={9}
            {...register('手機號碼', {
              required: true,
              maxLength: 9,
              minLength: 9,
              pattern: /^9[0-9]{8}$/i,
            })}
          />
        </div>
        <div className="mt-[15px]">
          <span className=" text-red-500">*</span>
          Email信箱（開賣時用此email通知）
        </div>
        <input
          className="w-full border border-solid h-[40px] border-[#DDDDDD] rounded-[5px] py-[9.5px] px-[10px] text-[14px] mt-[10px]"
          placeholder="輸入Email"
          {...register('輸入Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <div className="flex items-center mt-[15px]">
          <input
            type="checkbox"
            {...register('同意', { required: true })}
            className="mr-[6px] border-[1px] border-[#BBBBBB] rounded-[3px]"
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
