function AlertPopup() {
  return (
    <>
      <div className="fixed top-0 right-0 w-full h-full z-50 bg-black opacity-30"></div>
      <div className="fixed top-[35vh] z-50 w-[290px] h-[165px] bg-[#ffffff] flex flex-col justify-center rounded-[8px] drop-shadow-popup">
        <h1 className="flex items-center justify-center h-[40px] mx-auto text-center mb-[9.5px] text-[#333333]">
          請選擇商品選項
        </h1>
        <p className="text-[13px] text-[#333333] w-[260px] h-[20px] text-center mb-[30px] mx-auto">
          送出資料錯誤，未選擇商品款式規格
        </p>
        <button
          className="rounded-[5px] width-[260px] h-[40px] bg-[#ff5353] text-[#ffffff] text-center mx-[15px]"
          onClick={() => console.log('click')}
        >
          確認
        </button>
      </div>
    </>
  );
}

export default AlertPopup;
