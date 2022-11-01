const ReserveFooter = () => {
  return (
    <div className="w-[100vw] flex h-[68px] justify-center items-center drop-shadow-sm absolute bottom-0">
      <button
        form="form"
        type="submit"
        id="form"
        className="cursor-pointer w-[85%] h-[40px] md:h-[50px] bg-[#FF5353] rounded-[5px] flex justify-center items-center text-white max-w-[1080px]"
      >
        搶先登記
      </button>
    </div>
  );
};

export default ReserveFooter;
