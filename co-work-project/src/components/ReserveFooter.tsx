import _ from 'lodash';
import { useLocation } from 'react-router-dom';

const ReserveFooter = () => {
  const pathName = useLocation();
  console.log(pathName);
  const pathArray = _.split(pathName.pathname, '/');
  const firstPathName = pathArray[1];
  const secondPathName = pathArray[2];
  console.log(firstPathName, secondPathName);
  return (
    <footer className="flex-col w-[100vw] bg-white flex pt-[28px] justify-center items-center drop-shadow-sm flex-shrink-0">
      <p>warning</p>
      <button
        form="form"
        type="submit"
        id="form"
        className="cursor-pointer w-[85%] h-[40px] md:h-[50px] bg-[#FF5353] rounded-[5px] flex justify-center items-center text-white max-w-[1080px]"
      >
        搶先登記
      </button>
    </footer>
  );
};

export default ReserveFooter;
