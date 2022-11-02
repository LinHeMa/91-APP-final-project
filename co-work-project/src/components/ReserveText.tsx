function ReserveText() {
  return (
    <div className="w-[355px] h-[611px] mx-auto mt-[40px]">
      <div className="w-[315px] h-[571px] mt-[20px] mx-auto leading-4">
        <span className="font-bold  text-[10px]">預約活動說明:</span>
        <ol className="list-decimal text-[10px]">
          <li>
            預約登記日期：即日起至
            <p className="text-[#ff5353] mx-[2px] inline">2021/9/23(四)23:59</p>
            為止。
          </li>
          <li>
            預約活動方法及聲明：於指定活動網頁登記預約資料，後續透過簡訊及email依照登記順序通知購買。限量預約，預約登記額滿為止。
          </li>
          <li>預約購買辦法：預約人需於9/24 8:00依預約登記順序提供專屬購買。</li>
          <li>
            預約登記僅擁有優先購買資格，不代表訂購完成，訂單成立且成功付款後，方為完成訂購程序。
          </li>
          <li>
            個人資料保護法告知事項 <br />
            當您透過本活動網站輸入個人資料參與活動時表示已同意『蒐集個人資料告知事項與同意書』內容。
            <ol className="list-['-'] ml-[12px]">
              <li>個人資料項目：姓名、手機號碼、電子信箱</li>
              <li>
                個人資料利用之地區、對象及方式：
                <ol className="list-['．'] ml-[12px]">
                  <li>地區：台灣地區。</li>
                  <li>對象：參與活動之客戶</li>
                  <li>
                    方式：書面、電子文件、電話、以自動化機器或其他非自動化
                    等方式利用。
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            台端依據個資法第三條規定得行使之權利及方式：
            <ol className="list-decimal text-[10px] ml-[12px]">
              <li>
                資料使用期間，權利人得隨時向本公司請求查詢、閱覽、製給複製
                副本；或補充/更正、請求停止蒐集、處理、利用或刪除其所提供
                之個人資料內容一部或全部。
              </li>
              <li>
                台端得自由選擇是否提供相關個人資料，惟若拒絕提供相關個人資
                料者，將無法參加本活動或視為放棄預約登記資格。經檢舉或本公
                司發現不足以確認本活動參與者的身分真實性或其他個人資料冒
                用、盜用、資料不實等情形，致本公司無法進行必要之確認作業，
                本公司有暫停停止提供本活動相關服務並取消預約登記資格，如有
                不便之處敬請見諒。
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ReserveText;
