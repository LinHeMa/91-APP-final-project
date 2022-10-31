interface LabelProps {
  total: number;
  index: number;
}
const Label = ({ index, total }: LabelProps) => {
  return (
    <div className="flex w-[50px] h-[20px] justify-center items-center bg-[#333333] opacity-[0.5] text-white  rounded-[10px]">
      <span className=" text-[12px]">{`${index}/${total}`}</span>
    </div>
  );
};

export default Label;
