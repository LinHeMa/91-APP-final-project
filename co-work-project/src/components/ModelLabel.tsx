import classNames from 'classnames';

interface ModelLabelProps {
  name: string;
  color?: string;
}

const ModelLabel = ({ name, color }: ModelLabelProps) => {
  return (
    <div
      className={classNames({
        'border border-solid border-[#D4D9DE] rounded-[3px] w-fit h-[29px] flex px-[16px] py-[5px] justify-center items-center':
          true,
      })}
    >
      <div />
      <h1 className='text-[13px] flex whitespace-nowrap'>{name}</h1>
    </div>
  );
};

export default ModelLabel;
