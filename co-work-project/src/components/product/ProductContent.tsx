import { useState } from 'react';
import toDownImg from '../../assets/productImgs/toDownBigger.png';

interface dataContentProp {
  dataContent: { title: string; content: { title: string }[] };
}

function ProductContent({ dataContent }: dataContentProp) {
  const [contentOpen, setContentOpen] = useState(false);
  return (
    <div>
      <div
        className="flex items-start cursor-pointer group "
        onClick={() => setContentOpen(!contentOpen)}
      >
        <div className="text-[14px] text-[#999999] w-[180px] h-[20px] mb-3 flex items-center group-hover:text-[#333333] group-hover:underline decoration-[#999999]">
          {dataContent.title}
        </div>
        {dataContent.content.length !== 0 && contentOpen === false && (
          <div className="w-4 h-4 flex items-center">
            <img src={toDownImg} alt="toDown" />
          </div>
        )}
      </div>
      {contentOpen && (
        <div className="ml-[18px]  cursor-pointer">
          {dataContent.content.map((data, index) => (
            <div
              className="text-[14px] text-[#999999]  h-[20px] mb-3 flex items-center hover:text-[#333333] hover:underline   decoration-[#999999]"
              key={index}
            >
              {data.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductContent;
