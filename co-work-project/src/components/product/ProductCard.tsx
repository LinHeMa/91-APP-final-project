interface ProductCardProps {
  status: string;
}

function ProductCard({ status }: ProductCardProps) {
  return (
    <div className="bg-[#666666] h-7 px-3 flex justify-center items-center text-[14px] rounded-[32px] flex-nowrap absolute top-[50px] left-[21px] text-[#ffffff] cursor-pointer">
      {status === 'sold out' ? '已售完' : '即將開賣'}
    </div>
  );
}

export default ProductCard;
